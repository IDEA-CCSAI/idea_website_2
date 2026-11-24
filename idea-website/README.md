# Idea Website

A website built with [Payload CMS](https://payloadcms.com) and Next.js, using MongoDB for storage.

## Getting started

1. Copy `.env.example` to `.env` and fill in `DATABASE_URL`, `PAYLOAD_SECRET`, etc.
2. Install dependencies: `pnpm install` (or `npm install`)
3. Start the dev server: `pnpm dev`
4. Open `http://localhost:3000/admin` to create the first admin user, then add a page with the slug `home`.

## Useful scripts

- `pnpm dev` – start the dev server
- `pnpm build` / `pnpm start` – production build and serve
- `pnpm generate:types` – regenerate `src/payload-types.ts` after changing collections
- `pnpm generate:importmap` – regenerate the admin import map after adding custom admin components
- `pnpm lint` – run ESLint
- `pnpm test` – run integration and e2e tests

Site name and default description live in `src/utilities/siteConfig.ts`.
