# Byteroxx — marketing website

A Next.js 14 (App Router) site for Byteroxx, built with TypeScript, Tailwind CSS, and Framer Motion. Includes a Home, About, Careers, and Get in Touch page, with a working light/dark theme toggle in the header.

## Getting started

Requires Node.js 18.18 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To build for production:

```bash
npm run build
npm run start
```

Deploys as-is to Vercel, or anywhere else that runs Next.js.

## Project structure

```
app/
  page.tsx              Home
  about/page.tsx         About us
  careers/page.tsx       Careers
  contact/page.tsx       Get in touch
  api/contact/route.ts   Handles the contact form submission
  layout.tsx             Fonts, theme provider, navbar/footer shell
  globals.css            Theme tokens (colors) and base styles

components/
  navbar.tsx, footer.tsx, theme-toggle.tsx, theme-provider.tsx
  ui/                    Small reusable pieces (Button, Reveal, SpotlightCard,
                         Magnetic, Marquee, Counter, background effects)
  sections/              Page sections (Hero, Services, Timeline, OpenPositions, etc.)

lib/
  data.ts                All site copy lives here: services, stats, team,
                         testimonials, values, jobs, timeline, perks
  utils.ts               `cn()` classname helper

public/
  logo-dark.png           Logo lockup for dark backgrounds (white wordmark)
  logo-light.png          Same lockup with the wordmark recolored for light backgrounds
```

## Editing content

Almost everything you'd want to change on a regular basis (service descriptions, team members, job openings, testimonials, stats, timeline, perks) lives in **`lib/data.ts`** as plain arrays. Edit the text there rather than hunting through component files.

## Brand & theme

Colors were sampled directly from the uploaded logo and live as CSS variables in `app/globals.css` (see `:root` for light mode and `.dark` for dark mode). The gradient goes from a blue (`--primary`) to a violet (`--secondary`) in both themes. The footer is intentionally always dark, regardless of the toggle, so the primary dark logo lockup always has the right background to sit on.

Fonts are loaded via `next/font/google` in `app/layout.tsx`: **Bricolage Grotesque** for headings/display text, **Inter** for body copy.

The theme toggle (top right of the header) uses [`next-themes`](https://github.com/pacocoursey/next-themes) and just flips a `dark` class on `<html>`; there's no third "system" option since the ask was a simple light/dark switch.

## The animated bits

Framer Motion drives the motion throughout, but it's used deliberately rather than on every element:

- `components/ui/reveal.tsx` — scroll-triggered fade/rise wrapper, used once per content block rather than stacked on every child
- `components/ui/spotlight-card.tsx` — cursor-following glow, used for the Services grid on the home page
- `components/ui/magnetic.tsx` — subtle cursor-attraction wrapper for key CTA buttons
- `components/ui/counter.tsx` — animated count-up for the stats strip
- `components/ui/marquee.tsx` — pure-CSS infinite scroller for the tech stack strip (no JS needed)

These were hand-built in the style of sites like reactbits.dev rather than pulled in as a dependency, so there's nothing extra to install and everything is easy to restyle.

## The contact form

`components/sections/contact-form.tsx` posts to `app/api/contact/route.ts`, which validates the payload and returns success — but it does **not** currently send an email anywhere, since that needs a provider and an API key. To make it actually deliver messages, wire up an email provider inside that route, for example:

- [Resend](https://resend.com/docs/send-with-nextjs) (simplest option, generous free tier)
- Nodemailer with your own SMTP credentials
- Postmark or SendGrid

The `TODO` comment in `route.ts` marks exactly where to add it.

## Known placeholders to swap out

- Social links in the footer and contact page (`github.com`, `linkedin.com`, `instagram.com`) point to the generic homepages — update them to your real profiles.
- `hello@byteroxx.com` and `careers@byteroxx.com` are placeholder addresses used throughout — update them in `lib/data.ts` and the relevant component files.
- Team member names in `lib/data.ts` are placeholders — swap in your real team.
