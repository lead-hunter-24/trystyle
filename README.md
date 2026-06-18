# trystyle

**TryStyle** — The AI Operating System for Fashion Commerce.

An AI-native FashionTech landing page showcasing Generative AI Virtual Try-On,
AI-Powered Cataloging, Personalized Recommendations, and Computer Vision-driven
Fashion Intelligence.

## Stack
- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- `next/font` for self-hosted Fraunces / Inter / Space Grotesk
- Editorial design system with scroll-driven reveals, animated metrics, and infographic sections
- Fully responsive, reduced-motion aware, zero runtime UI dependencies

## Develop

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure
- `app/layout.tsx` — fonts, metadata, root layout
- `app/page.tsx` — page composition
- `app/globals.css` — design system + layout
- `components/` — section components (Hero, Build, Tech, Pipeline, Capabilities, Problem, Vision, CTA, Footer)
- `components/Effects.tsx` — client-side interactions (reveals, counters, nav state, progress)
