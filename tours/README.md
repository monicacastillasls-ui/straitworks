# Gibraltar Private Tours — client website

Bilingual (English / Spanish) marketing site for a private tour operator in Gibraltar.
Built with Next.js (App Router), TypeScript and Tailwind CSS. It is a standalone project
inside the `tours/` folder, separate from the Strait Works site at the repository root.

## Getting started

```bash
cd tours
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en` or `/es`
depending on your browser language.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check

## Where things live

- `content/business.ts` — brand name, email, WhatsApp number, address, social links and the
  tour catalogue (prices, durations, group sizes).
- `content/dictionaries/en.ts` and `es.ts` — all on-page copy. Spanish must match the English
  structure; the TypeScript build fails if a key is missing.
- `components/sections/` — one file per page section.
- `components/illustrations/Rock.tsx` — SVG artwork used until real photos are supplied.

## Bookings: WhatsApp and email

There is no backend. The booking form validates the request, then:

- **Send via WhatsApp** opens `wa.me/<number>` with the booking details prefilled.
- **Send via email** opens the visitor's email app with a prefilled message to `business.email`.

No payment is taken online.

## Before launch — replace placeholder content

Search for `TODO` in the project. In particular:

- `content/business.ts`: brand name, domain, bookings email, WhatsApp number (digits only,
  international format, e.g. `35020012345`), phone, address, licence and social links.
- Tour prices, durations and group sizes in `content/business.ts`.
- **Reviews** in both dictionaries are sample text. Replace them with genuine reviews
  from the client (e.g. Tripadvisor or Google) before going live.
- Replace the SVG illustrations in `Hero.tsx` and `Tours.tsx` with the client's photos
  (use `next/image` and put files in `public/`).
- Add a privacy policy and legal notice page with the client's legal details.

## Deploying to Vercel

Create a new Vercel project from this repository and set **Root Directory** to `tours`.
No environment variables are required.
