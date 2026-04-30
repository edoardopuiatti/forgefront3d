# Forgefront 3D Website - AI Handoff Brief

## Project summary

This is a marketing website for Forgefront 3D, a small 3D print-on-demand service. It is built with Astro and styled using Tailwind CSS. The site is structured as a static site with a bilingual English/Czech experience and includes pages for quotes, materials, how it works, use cases, FAQ, contact, and legal content.

## Stack

- Astro v5
- Tailwind CSS v4 via `@tailwindcss/vite`
- TypeScript
- Static site output
- Hosted on Cloudflare Pages via GitHub repository

## Key files and directories

- `astro.config.mjs` — Astro config with `site` URL and Tailwind plugin
- `package.json` — project scripts and dependencies
- `src/layouts/BaseLayout.astro` — shared site shell, metadata, OG tags, JSON-LD
- `src/components/` — reusable UI components
- `src/pages/` — main pages
- `src/pages/cs/` — Czech localized pages
- `src/data/site.ts` — site metadata and content data
- `src/data/site-cs.ts` — Czech site metadata and localized content
- `src/styles/global.css` — Tailwind imports and custom utility classes

## Current status

- Local dev server is running at `http://127.0.0.1:4321/`
- The project has been pushed to GitHub `origin/main`
- `astro.config.mjs` has been updated to use the live domain `https://forgefront3d.com`
- Czech localization files were added: `src/data/site-cs.ts` and `src/pages/cs/*`

## Notes for the next AI

- The contact and quote forms are currently demo-style and do not have a backend integration.
- The site content contains placeholder text and should be updated with actual business details, branding, and legal copy.
- The Cloudflare Pages build settings should use `npm run build` and output from `dist`.
- Check for any untracked or generated files before making commits; the repository should not include `node_modules` or build artifacts.

## Recommended next tasks

1. Review the Czech localization pages for correctness and consistency.
2. Validate the local build with `npm run build` and preview the production output.
3. Add form backend integration or a proper form service.
4. Replace placeholder content, email, and domain references if needed.
5. Confirm Cloudflare Pages domain configuration for `forgefront3d.com`.
