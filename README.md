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

## Integration Notes

- `src/components/QuoteForm.astro` currently ships with a demo client-side success state.
- Replace the demo submit handler with a real integration before launch:
  - Formspree
  - Netlify Forms
  - Resend + serverless/API route
  - A custom upload endpoint for larger files
- `src/components/ContactForm.astro` also uses a demo success state and should be connected to a real email/form backend.

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
