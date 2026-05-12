# Forgefront 3D Marketing Site

Astro + Tailwind static website for a small 3D print-on-demand business. The site is designed around two primary actions:

- Upload a 3D file and request a quote
- Contact the shop about a custom job

## Project Structure

```text
/
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── social-share.svg
├── src/
│   ├── components/
│   │   ├── ButtonLink.astro
│   │   ├── ContactForm.astro
│   │   ├── Container.astro
│   │   ├── FAQList.astro
│   │   ├── MaterialPreviewCard.astro
│   │   ├── PageIntro.astro
│   │   ├── QuoteForm.astro
│   │   ├── SectionHeading.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── data/
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   ├── how-it-works.astro
│   │   ├── index.astro
│   │   ├── materials-finishes.astro
│   │   ├── privacy-policy.astro
│   │   ├── quote.astro
│   │   ├── terms-of-service.astro
│   │   └── use-cases.astro
│   └── styles/
│       └── global.css
└── tsconfig.json
```

## Setup

Astro's current install docs list Node.js `v22.12.0` or higher as the recommended baseline. Tailwind's current Astro guide uses the Tailwind Vite plugin with Astro.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local dev server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Cloudflare Worker Setup

Form submissions are handled by a Cloudflare Worker deployed to `api.forgefront3d.com`. 

### Worker Configuration

The Worker is located in the `worker/` directory:

- `worker/wrangler.jsonc` – Wrangler configuration with Resend API key
- `worker/src/index.ts` – TypeScript handler for form submissions

### Environment Setup

1. **Prerequisites:**
   - Wrangler CLI installed globally: `npm install -g wrangler`
   - Cloudflare account with Pages project set up
   - Resend account with API key

2. **Configure Resend API Key:**
   - Get your API key from https://resend.com/api-keys
   - Add it to `worker/wrangler.jsonc` under `env.production.vars.RESEND_API_KEY`
   - The key is already set in the config

3. **Deploy the Worker:**

   ```bash
   export CLOUDFLARE_API_TOKEN="your-token-here"
   cd worker
   wrangler deploy
   ```

### Email Delivery

- **Provider:** Resend API (independent from Cloudflare, no MX record conflicts)
- **From Address:** `info@forgefront3d.com`
- **Recipient:** `info@forgefront3d.com`
- **Reply-To:** Customer's submitted email address
- **Mailbox Provider:** Zoho Mail (unchanged, preserves existing MX records)
- File attachments (up to 25 MB total per submission) are included in the email

### Form Submission Flow

**Quote Form** (`/quote/`):
- Requires: Name, Email, Material, Quantity, Finish, Delivery Method, Project Notes, at least one file
- Optional: Company, Dimensions, Color, Needed by date
- Supports multiple file uploads (STL, STEP, OBJ, 3MF, ZIP, PDF)
- File limits: 20 MB per file, 25 MB total per submission

**Contact Form** (`/contact/`):
- Requires: Name, Email, Message, Topic
- Submits to the same Worker endpoint with optional file support

### Troubleshooting

- If forms fail to submit, check that `api.forgefront3d.com` DNS/routing is correctly configured in Cloudflare
- Monitor Worker logs: `wrangler tail` in the `worker/` directory
- Verify the Resend API key in `wrangler.jsonc` is valid and has email sending permissions
- Check Resend dashboard at https://resend.com for delivery status

## Content And Assets To Replace Before Launch

- Replace the placeholder business name if needed: `Forgefront 3D`
- Replace `hello@forgefront3d.example` and `(555) 010-3040`
- Replace the placeholder service area on the Contact page
- Replace the sample testimonials with real customer feedback
- Replace gallery placeholders with real printed-part photography
- Replace `public/social-share.svg` with a branded Open Graph image if desired
- Review and customize the Privacy Policy and Terms of Service with business-specific legal language

## Recommended Next Steps For Better Quoting

1. Add a real quote backend that stores uploads, notes, and requested materials in a dashboard or inbox.
2. Support larger file transfers through object storage or a signed upload flow.
3. Add optional file checks such as mesh validation, bounding-box detection, and estimated print volume.
4. Save quote requests to a CRM or spreadsheet so follow-up stays organized.
5. Add a downloadable file-prep guide or automatic reply email for first-time customers.

## References

- [Astro install and setup](https://docs.astro.build/en/install-and-setup/)
- [Astro styling guide for Tailwind](https://docs.astro.build/en/guides/styling/)
- [Tailwind CSS Astro guide](https://tailwindcss.com/docs/guides/astro)
