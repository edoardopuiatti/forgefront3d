interface Env {
  RESEND_API_KEY: string;
}

interface FormFields {
  name: string;
  email: string;
  telephone: string;
  company: string;
  preferredMaterial: string;
  quantity: string;
  dimensions: string;
  colorPreference: string;
  finishPreference: string;
  neededBy: string;
  deliveryMethod: string;
  projectNotes: string;
  fileNames: string[];
}

function uint8ArrayToBase64(arr: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < arr.byteLength; i++) {
    binary += String.fromCharCode(arr[i]);
  }
  return btoa(binary);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Only allow POST
    if (request.method !== "POST") {
      return errorResponse("Method not allowed", 405);
    }

    try {
      const formData = await request.formData();

      // Extract form fields
      const name = (formData.get("name") as string)?.trim();
      const email = (formData.get("email") as string)?.trim();
      const telephone = (formData.get("telephone") as string)?.trim() || "";
      const company = (formData.get("company") as string)?.trim() || "";
      const preferredMaterial = (formData.get("preferredMaterial") as string)?.trim();
      const quantity = (formData.get("quantity") as string)?.trim();
      const dimensions = (formData.get("dimensions") as string)?.trim() || "";
      const colorPreference = (formData.get("colorPreference") as string)?.trim() || "";
      const finishPreference = (formData.get("finishPreference") as string)?.trim();
      const neededBy = (formData.get("neededBy") as string)?.trim() || "";
      const deliveryMethod = (formData.get("deliveryMethod") as string)?.trim();
      const projectNotes = (formData.get("projectNotes") as string)?.trim();

      console.log("Form data received:", {
        name,
        email,
        telephone: telephone || "(empty)",
        company,
        preferredMaterial,
        quantity,
        dimensions,
        colorPreference,
        finishPreference,
        neededBy,
        deliveryMethod,
        projectNotes: projectNotes ? "present" : "missing"
      });

      // Validate required text fields
      if (!name) {
        return errorResponse("Name is required", 400);
      }

      if (!email) {
        return errorResponse("Email is required", 400);
      }

      // Determine if this is a quote form or simple contact form
      // Quote forms have preferredMaterial; contact forms may only have a message/topic
      const isQuoteForm = preferredMaterial !== undefined && preferredMaterial !== null && preferredMaterial !== "";
      const hasMessage =
        projectNotes !== undefined &&
        projectNotes !== null &&
        projectNotes !== "";

      if (isQuoteForm) {
        // Quote form validation
        if (!preferredMaterial) {
          return errorResponse("Preferred material is required", 400);
        }

        if (!quantity) {
          return errorResponse("Quantity is required", 400);
        }

        if (!finishPreference) {
          return errorResponse("Finish preference is required", 400);
        }

        if (!deliveryMethod) {
          return errorResponse("Delivery method is required", 400);
        }

        if (!projectNotes) {
          return errorResponse("Project notes are required", 400);
        }
      } else if (!hasMessage) {
        // Simple contact form needs at least a message
        return errorResponse("Message or project notes are required", 400);
      }

      // Get uploaded files (optional)
      const files = formData.getAll("files") as File[];

      // Filter out non-file entries and validate if files are present
      const validFiles = files.filter(
        (f) => f instanceof File && f.size > 0
      );

      if (isQuoteForm && validFiles.length === 0) {
        return errorResponse("At least one file is required", 400);
      }

      // Validate and prepare files
      const maxFileSize = 20 * 1024 * 1024; // 20 MB
      const maxTotalSize = 25 * 1024 * 1024; // 25 MB
      const allowedExtensions = [".stl", ".step", ".stp", ".obj", ".3mf", ".zip", ".pdf"];

      let totalSize = 0;
      const fileNames: string[] = [];
      const attachments: Array<{
        filename: string;
        content: Uint8Array;
        contentType?: string;
      }> = [];

      for (const file of validFiles) {
        const fileName = file.name.toLowerCase();

        // Check file extension
        const hasValidExt = allowedExtensions.some((ext) => fileName.endsWith(ext));
        if (!hasValidExt) {
          return errorResponse(`File type not allowed: ${file.name}`, 400);
        }

        // Check file size
        if (file.size > maxFileSize) {
          return errorResponse(`File exceeds 20 MB limit: ${file.name}`, 400);
        }

        totalSize += file.size;

        // Check total size
        if (totalSize > maxTotalSize) {
          return errorResponse("Total file size exceeds 25 MB", 413);
        }

        fileNames.push(file.name);

        const buffer = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: new Uint8Array(buffer),
          contentType: file.type || "application/octet-stream",
        });
      }

      // Build email body
      const emailBody = formatEmailBody({
        name,
        email,
        telephone,
        company,
        preferredMaterial,
        quantity,
        dimensions,
        colorPreference,
        finishPreference,
        neededBy,
        deliveryMethod,
        projectNotes,
        fileNames,
      });

      // Send email via Resend API
      let emailSent = false;
      let emailError = null;

      try {
        const resendAttachments = attachments.map((att) => ({
          filename: att.filename,
          content: uint8ArrayToBase64(att.content),
          content_type: att.contentType,
        }));

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "info@forgefront3d.com",
            to: "info@forgefront3d.com",
            replyTo: email,
            subject: `New ForgeFront3D enquiry from ${name}`,
            text: emailBody,
            attachments: resendAttachments.length > 0 ? resendAttachments : undefined,
          }),
        });

        const emailResult = await emailResponse.json();
        if (!emailResponse.ok) {
          emailError = emailResult.message || `Resend API error: ${emailResponse.status}`;
          console.error("Resend API error:", emailResult);
        } else {
          emailSent = true;
          console.log("Email sent via Resend:", emailResult.id);
        }
      } catch (err: any) {
        emailError = err?.message || "Unknown email error";
        console.error("Email send failed:", err?.message || err);
      }

      if (!emailSent) {
        return errorResponse(emailError || "Failed to send email", 500);
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("Error processing form:", error);
      return errorResponse("Failed to process form submission", 500);
    }
  },
};

function errorResponse(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function formatEmailBody(data: FormFields): string {
  return `New ForgeFront3D Enquiry

Customer Information
─────────────────────
Name: ${data.name}
Email: ${data.email}
Telephone: ${data.telephone || "(not provided)"}
Company: ${data.company || "(not provided)"}

Project Specifications
──────────────────────
Preferred Material: ${data.preferredMaterial}
Quantity: ${data.quantity}
Dimensions: ${data.dimensions || "(not provided)"}
Color Preference: ${data.colorPreference || "(not provided)"}
Finish Preference: ${data.finishPreference}
Needed by: ${data.neededBy || "(not provided)"}
Delivery Method: ${data.deliveryMethod}

Project Notes
─────────────
${data.projectNotes}

Attached Files (${data.fileNames.length})
────────────────────────
${data.fileNames.map((f) => `• ${f}`).join("\n")}

──────────────────────────────────────
This enquiry was submitted via the ForgeFront3D contact form.
Reply-to: ${data.email}
`;
}
