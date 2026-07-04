# Kathirgamanathan Kajanan — Portfolio

Premium, dark-mode-first developer portfolio built with **Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and Lucide icons**.

## Tech Stack

- **Next.js App Router** — static-first rendering, SEO metadata, JSON-LD person schema
- **TypeScript** — fully typed content model and components
- **Tailwind CSS v4** — CSS-first config via `@theme` tokens in `src/app/globals.css` (no `tailwind.config` needed)
- **Framer Motion** — subtle entrance animations, `prefers-reduced-motion` respected
- **next-themes** — dark mode by default, light mode toggle
- **Lucide React** — icon system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts (Inter, Space Grotesk, JetBrains Mono), SEO metadata, theme provider
│   ├── page.tsx          # Section composition + JSON-LD structured data
│   └── globals.css       # Design tokens (dark/light), glass & glow utilities
├── data/
│   └── portfolio.ts      # ← ALL site content lives here. Edit this to update copy.
├── lib/
│   └── utils.ts          # cn() class helper
└── components/
    ├── navbar.tsx            # Sticky blur navbar, active-section highlight, mobile menu
    ├── hero.tsx              # Headline, CTAs, impact metrics
    ├── about.tsx
    ├── experience-timeline.tsx / experience-card.tsx
    ├── featured-projects.tsx / project-card.tsx
    ├── open-source.tsx
    ├── skills-grid.tsx
    ├── achievements.tsx
    ├── education.tsx
    ├── volunteer-leadership.tsx
    ├── contact.tsx           # Contact buttons + placeholder form (see below)
    ├── footer.tsx
    ├── section-header.tsx    # Reusable section heading
    ├── metric-card.tsx       # Reusable stat tile
    ├── reveal.tsx            # Reusable scroll-entrance animation wrapper
    ├── theme-toggle.tsx
    └── ui/                   # button, badge primitives
```

## Updating Content

All copy — name, headline, metrics, experience, projects, skills, awards — lives in
**`src/data/portfolio.ts`**. No component edits needed for content changes.

## Download CV Button

The hero's **Download CV** button links to `/cv.pdf`. Add a **public-safe** CV
(no phone number, no reference contact details) at:

```
public/cv.pdf
```

## Contact Form

The contact form is a **safe placeholder** — it does not send data anywhere.
To make it real:

1. Create an API route at `src/app/api/contact/route.ts` that forwards messages
   via a provider (e.g. Resend, SendGrid) or use a service like Formspree.
2. Keep any API keys in environment variables (`.env.local`, never committed):
   ```
   RESEND_API_KEY=...   # example — server-side only
   ```
3. Replace the `setTimeout` in `src/components/contact.tsx` with a `fetch("/api/contact", ...)`.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js; no configuration needed.
3. (Optional) Set a custom domain, then add it as `metadataBase` in `src/app/layout.tsx` for absolute OG URLs.

Build locally to verify before deploying:

```bash
npm run build
```

## Privacy Notes

- No phone numbers or reference contacts appear anywhere on the site.
- No API keys or secrets are hardcoded — keep it that way (use env vars for any future integrations).
