# GFAUTO — GF Garage

Automotive website and interactive client demonstration for GF Garage, Ottery, Cape Town.

## Deploy the client demo on Vercel

Import this repository and use:

- Project name: `gfauto`
- Root directory: `vercel-demo`
- Framework: Next.js
- Build command: `npm run build`
- Output directory: framework default (`out` static export)

The demo opens at `/` and `/demo`. Its sample dashboard is `/demo/staff`. It requires no account, API key or database. Sample requests are stored only in the current browser tab and can be reset. WhatsApp actions open the real business chat at +27 72 613 5470; users must press Send themselves.

## Source layout

The repository root preserves the original Sites/Cloudflare application, including D1 schema and protected staff routes. It is not the Vercel build root. `vercel-demo/` contains the portable Next.js client demonstration.

The existing hosted application remains unchanged. Its live database, real bookings, owner authentication and cloud resources are not copied to Vercel. Production booking notifications and automatic WhatsApp responses still need separate integrations.

## Local demo

```sh
cd vercel-demo
npm install
npm run dev
```

Business details and reviews still require owner confirmation. The hero is illustrative AI-generated artwork, not a photograph of GF Garage.
