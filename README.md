Bibinii Farms website built with [Next.js](https://nextjs.org) App Router and Tailwind CSS. The app is configured for static export and Netlify deployment.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Key entry points:
- `app/layout.tsx`: root layout, fonts, global providers.
- `app/page.tsx`: home page.
- `app/products/page.tsx`: products listing with sliders for Heritage, Pasture Raised, Organic, and Free Range.
- `app/sitemap.ts`: static sitemap config.
- `next.config.ts`: static export and remote image domains.

Tech:
- Next.js App Router (static export).
- TypeScript.
- Tailwind CSS.
- Sentry instrumentation (see `sentry.*.config.ts`).
- Embla carousel for image sliders.

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: production build (static export)
- `npm run start`: serve static export (via Netlify/preview)

Build output is written to `out/` due to `output: 'export'` in `next.config.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment (Netlify)

This project is set up for Netlify static hosting.

- Build command: `npm run build`
- Publish directory: `out`
- Environment: Node 18+ recommended

Sitemap is generated via `app/sitemap.ts` and exported to `out/sitemap.xml` during build. Robots should point to `/sitemap.xml`.

For Netlify-specific configuration and workflow customization, adjust your site settings or add a `netlify.toml` if needed.
