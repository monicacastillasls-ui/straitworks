# Strait Works — Digital Studio Website

Marketing site for Strait Works, built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check with no output

## Before publishing

Search the codebase for the following and replace with real values:

- `content/site.ts` — `siteConfig.url` (production domain) and `siteConfig.contactEmail`.
- `app/privacy/page.tsx` and `app/cookies/page.tsx` — every field wrapped in `<LegalPlaceholder>` (legal business name, address, effective dates, jurisdiction, DPO/privacy contact). Have a legal professional review both pages before launch.
- The contact form (`components/sections/Contact.tsx`) does not send data anywhere yet — it validates and shows a success state locally. Connect the `TODO` in `handleSubmit` to a real email/form backend (e.g. an API route, Resend, or a form service) before relying on it.

## Content & i18n

All UI copy lives in `content/site.ts`, typed and centralized. To add a Spanish version later, create `content/site.es.ts` with the same shape and introduce a locale switch (e.g. a route segment or a simple selector) — no components hardcode English strings, so this is a drop-in change.

## Deploying to Vercel

This is a standard Next.js App Router project — connect the repository in Vercel and deploy with default settings. No environment variables are required for the current feature set.

## Other projects in this repository

- `tours/` — client website for a private tour operator in Gibraltar (standalone Next.js app, EN/ES). See `tours/README.md`.
