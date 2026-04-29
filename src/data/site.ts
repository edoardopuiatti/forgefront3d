export const site = {
  name: "Forgefront 3D",
  title: "Forgefront 3D | Custom 3D Printing for Parts, Prototypes, and Small Batches",
  description:
    "Fast, practical 3D printing for replacement parts, prototypes, custom jobs, and short-run production. Upload a file or request a quote.",
  url: "https://www.forgefront3d.example",
  email: "hello@forgefront3d.example",
  phone: "(555) 010-3040",
  whatsapp: "(555) 010-3040",
  responseTime: "Typical quote replies within 1 business day",
  addressLine: "[Replace with business pickup address or service area]",
  hours: "Monday-Friday, 9:00 AM-6:00 PM",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/materials-finishes/", label: "Materials & Finishes" },
  { href: "/quote/", label: "Pricing / Quote" },
  { href: "/use-cases/", label: "Use Cases" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const fileTypes = ["STL", "STEP", "OBJ", "3MF"];

export const trustBarItems = [
  "Human-reviewed quotes",
  "One-off and short-run friendly",
  "Local pickup or shipping",
  "Practical material guidance",
];

export const steps = [
  {
    title: "Upload your file or send the job details",
    description:
      "Share an STL, STEP, OBJ, or 3MF file. If you do not have a model yet, send a sketch, reference photo, or a description of the part you need.",
  },
  {
    title: "Receive a quote and material recommendation",
    description:
      "Every job is reviewed by a real person. You will get pricing, lead time, and help choosing the right material or finish for the part.",
  },
  {
    title: "We print, inspect, and arrange delivery or pickup",
    description:
      "Once approved, the job moves into print prep and production. Small parts can often move quickly, with pickup or shipping arranged when finished.",
  },
];

export const homeUseCases = [
  {
    title: "Replacement parts",
    description: "Clips, brackets, covers, knobs, spacers, and hard-to-find parts for home, workshop, or equipment repairs.",
  },
  {
    title: "Prototypes",
    description: "Simple prototype housings, jigs, fixtures, and early-stage product parts for fast iteration.",
  },
  {
    title: "Hobby and maker projects",
    description: "Project enclosures, adapters, mounts, and custom components for makers who need parts without buying a printer.",
  },
  {
    title: "Custom one-offs",
    description: "Need a single part made for a specific job? One-off prints are welcome, even if the job is unusual.",
  },
  {
    title: "Small batch parts",
    description: "Short runs for test units, internal tools, or low-volume business needs where injection molding does not make sense.",
  },
];

export const materials = [
  {
    name: "PLA",
    quickDescription: "Easy to print, clean-looking, and budget-friendly for many everyday parts and visual models.",
    bestUse: "Concept models, light-duty brackets, enclosures, display parts",
    affordability: "Most affordable",
    durability: "Moderate durability",
    strength: "Good rigidity, lower heat resistance",
    finish: "Wide color range with visible layer lines",
    caveats: "Best for indoor parts that do not need to handle high temperatures.",
  },
  {
    name: "PETG",
    quickDescription: "A strong all-around material with better toughness and moisture resistance than PLA.",
    bestUse: "Functional parts, workshop accessories, housings, utility brackets",
    affordability: "Affordable mid-range",
    durability: "Good durability",
    strength: "Tougher than PLA with better chemical resistance",
    finish: "Slightly glossier surface than PLA",
    caveats: "Great for many functional jobs when you need a balance of cost and durability.",
  },
  {
    name: "ABS",
    quickDescription: "More heat-tolerant and suitable for tougher functional parts when the geometry and application are a good fit.",
    bestUse: "Functional prototypes, shop parts, warmer environments",
    affordability: "Mid-range",
    durability: "Good impact and heat resistance",
    strength: "Useful for more demanding functional parts",
    finish: "Matte finish with visible print lines",
    caveats: "Availability may depend on part size, warp risk, and required finish quality.",
  },
  {
    name: "Resin",
    quickDescription: "Higher-detail prints for small parts, smooth surfaces, and presentation pieces.",
    bestUse: "Miniatures, fine-detail components, display models, cosmetic prototypes",
    affordability: "Higher cost",
    durability: "Varies by resin type",
    strength: "Best chosen based on detail needs rather than raw toughness",
    finish: "Smooth detail and crisp edges",
    caveats: "Excellent for visual detail, but not every resin part is ideal for rough use or outdoor exposure.",
  },
] as const;

export const reasons = [
  {
    title: "Human review before printing",
    description: "You are not sending files into a black box. Every quote is reviewed for printability, material fit, and practical next steps.",
  },
  {
    title: "Fast turnaround for straightforward jobs",
    description: "Small parts and simple repeat jobs can often move quickly. If a deadline matters, include it in the quote request.",
  },
  {
    title: "Clear communication",
    description: "If a model needs adjustment, a part looks weak, or a better material is available, you will hear about it before printing starts.",
  },
  {
    title: "Friendly to one-offs and low volume",
    description: "This service is built for the kind of work that bigger factories often ignore: single parts, short runs, and practical custom jobs.",
  },
  {
    title: "Personal local service",
    description: "Local pickup can be arranged, and questions are answered by the person actually reviewing and printing the job.",
  },
  {
    title: "Help for non-technical customers",
    description: "If you are new to 3D printing, you can still get help. A clear description or reference photo is often enough to start the conversation.",
  },
];

export const galleryItems = [
  { label: "Functional bracket", note: "Replace with real photo of printed bracket" },
  { label: "Prototype enclosure", note: "Replace with photo of prototype enclosure" },
  { label: "Replacement knob", note: "Replace with photo of replacement household part" },
  { label: "Fixture for shop use", note: "Replace with photo of printed tool or jig" },
  { label: "Cosplay detail part", note: "Replace with photo of costume component" },
  { label: "Small batch spacer set", note: "Replace with photo of repeat production parts" },
];

export const testimonials = [
  {
    quote:
      "I needed a replacement clip for a kitchen appliance that was no longer sold anywhere. The part fit well and the turnaround was much faster than I expected.",
    name: "Sample review from a repair customer",
  },
  {
    quote:
      "We used Forgefront 3D for a simple prototype housing before committing to a larger manufacturing step. The communication was clear and the print was ready to test.",
    name: "Sample review from an early-stage product team",
  },
  {
    quote:
      "I sent over a hobby project with almost no technical notes. They helped choose material, checked the model, and made the process easy.",
    name: "Sample review from a first-time customer",
  },
];

export const proofPoints = [
  {
    title: "Quote-first workflow",
    description: "Upload a file, describe the job, and get a manual quote instead of a misleading fake instant price.",
  },
  {
    title: "Designed for practical jobs",
    description: "From broken part replacements to quick prototype runs, the site is built for real-world small-batch work.",
  },
  {
    title: "Support if your file is not perfect",
    description: "If a wall looks too thin, a hole needs resizing, or a better orientation is possible, those issues can be flagged before printing.",
  },
];

export const faqs = [
  {
    question: "What file types do you accept?",
    answer:
      "The preferred upload formats are STL, STEP, OBJ, and 3MF. If your CAD software exports another format, get in touch first and we can confirm whether it will work.",
  },
  {
    question: "How long does printing take?",
    answer:
      "Lead time depends on part size, quantity, material, and current queue. Straightforward small parts can often move quickly, while larger or more detailed jobs may take longer. If you have a deadline, include it with the quote request.",
  },
  {
    question: "How much does 3D printing cost?",
    answer:
      "Pricing depends on material, print time, part size, quantity, finish requirements, and urgency. Uploading your file is the fastest way to get an accurate quote.",
  },
  {
    question: "What if I do not have a 3D file?",
    answer:
      "You can still reach out. A sketch, broken part, photo, or simple dimensions may be enough to discuss whether the job is possible and what the next step should be.",
  },
  {
    question: "Can you help fix or review a model?",
    answer:
      "Basic file review is part of the quoting process. If a model has obvious printability issues or needs a small adjustment, that can be discussed before the job moves forward.",
  },
  {
    question: "What materials do you offer?",
    answer:
      "Common options include PLA, PETG, ABS, and resin, depending on the part requirements and current stock. If you need something specific, ask during the quote request.",
  },
  {
    question: "Do you print one-off parts?",
    answer:
      "Yes. One-off parts and low-volume jobs are a core part of the service, especially for replacements, prototypes, and custom practical pieces.",
  },
  {
    question: "Do you ship or offer pickup?",
    answer:
      "Both options can be arranged. Shipping and local pickup availability should be confirmed when the quote is approved.",
  },
  {
    question: "What size parts can you print?",
    answer:
      "The maximum printable size depends on the printer and material. If a part is too large for a single piece, it may still be possible to split and assemble it.",
  },
  {
    question: "How accurate are the printed parts?",
    answer:
      "3D printed parts are suitable for many functional jobs, but exact tolerances depend on geometry, material, orientation, and post-processing. Critical dimensions should always be called out in advance.",
  },
  {
    question: "Can you print confidential or proprietary parts?",
    answer:
      "Reasonable care can be taken with private customer files, but if confidentiality matters, contact the shop before sending sensitive designs so handling expectations can be discussed.",
  },
  {
    question: "What finish should I expect?",
    answer:
      "Most parts will show some layer lines or support marks because this is a practical print service, not an invisible-finish production process. If appearance matters, mention it early so the right material and finish expectations can be set.",
  },
];

export const detailedUseCases = [
  {
    title: "Replacement parts",
    description:
      "3D printing is ideal when an original part is discontinued, hard to source, or not worth ordering in bulk. Functional clips, covers, brackets, knobs, and adapters are common jobs.",
    bullets: [
      "Useful for appliance parts, workshop accessories, vehicle interior pieces, and specialty fittings",
      "Good option when the part only needs to solve one practical problem",
      "Helpful for repairs where speed matters more than ordering from multiple suppliers",
    ],
  },
  {
    title: "Prototyping",
    description:
      "For startups, engineers, and product teams, 3D printing provides a fast way to check fit, handling, enclosure layout, or basic function before investing in a more expensive process.",
    bullets: [
      "Quick housing and enclosure mockups",
      "Internal test parts and geometry checks",
      "Short-run pilot parts before a manufacturing handoff",
    ],
  },
  {
    title: "Maker and hobby projects",
    description:
      "Not every hobbyist wants to own or maintain a printer. This service works well for mounts, adapters, project boxes, tabletop accessories, and other custom maker parts.",
    bullets: [
      "Good for one-off project parts or small upgrades",
      "Helpful if you only need a few pieces and want them printed correctly the first time",
      "Suitable for custom project parts that are hard to buy off the shelf",
    ],
  },
  {
    title: "Custom gifts and cosplay parts",
    description:
      "Props, display objects, decorative components, and costume details can all be good candidates for 3D printing, especially when the part needs a specific shape or surface detail.",
    bullets: [
      "Fine detail parts may be better suited to resin",
      "Large decorative prints may need joining or finishing after printing",
      "Expect a discussion around finish level and post-processing needs",
    ],
  },
  {
    title: "Small batch business parts",
    description:
      "When a business needs ten, twenty, or fifty parts instead of thousands, 3D printing can be a practical option for jigs, fixtures, internal-use parts, or early product runs.",
    bullets: [
      "Useful for tooling, internal equipment, and short-run accessories",
      "Avoids the setup cost of traditional manufacturing for low volumes",
      "Works well when the design may still change between runs",
    ],
  },
];

export const priceFactors = [
  {
    title: "Part size and volume",
    description: "Larger parts use more material and machine time, which affects cost directly.",
  },
  {
    title: "Material choice",
    description: "PLA, PETG, ABS, and resin have different costs, strengths, and print handling needs.",
  },
  {
    title: "Quantity",
    description: "Single parts and short runs are welcome, but repeat quantities still change setup and production time.",
  },
  {
    title: "Geometry complexity",
    description: "Thin walls, supports, awkward orientations, or cleanup-heavy designs can increase handling time.",
  },
  {
    title: "Finish expectations",
    description: "Smoother presentation parts or additional cleanup work may need extra labor beyond a standard print.",
  },
  {
    title: "Deadline and urgency",
    description: "Rush jobs can sometimes be handled, but they should be discussed up front in the quote request.",
  },
];
