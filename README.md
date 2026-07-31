# Md. Julmot Hossain - Personal Portfolio

Personal portfolio website for **Md. Julmot Hossain**, built from the approved
PRD and UI/UX Design Specification. Static-exported Next.js, deployed to
Cloudflare Pages at <https://julmothossain.me>.

---

## Phase status

| Phase | Scope | Status |
| --- | --- | --- |
| Phase 0 | Project setup, config, branding assets | Complete |
| Phase 1 | Design system, app shell, navigation, footer, Home page | Complete |
| Phase 2 | Projects index + individual project detail pages | Complete |
| Phase 3 | Project detail polish, media slots | Complete |
| Phase 4 | About, Resume, FAQ pages | Complete |
| Phase 5 | Contact page + form with spam protection | Not started |
| Phase 6 | SEO, performance, accessibility audit, deploy | Not started |

Routes for later phases already exist and render an honest "built in a later
phase" placeholder, so navigation never breaks and no invented content is shown.

---

## Getting started

Requires **Node.js 20.9+**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
npm run preview  # serve the exported ./out folder
npm run typecheck
```

> Note: dependencies were **not** installed and `next build` was **not** run in
> the authoring environment because it had no network access. Run
> `npm install` locally once before the first build.

---

## Project structure

```
app/                 Routes (App Router, static export)
  layout.tsx         Fonts, metadata, JSON-LD, header/footer, skip link
  page.tsx           Home page - composes the 8 home sections
  sitemap.ts         Sitemap; add new routes here
  robots.ts          robots.txt
  not-found.tsx      404
  about|projects|resume|faq|contact/
components/          Shared UI + client-side behaviour
  home/              The 8 Home page sections, in spec order
lib/                 All editable content and data
styles/              Design system (tokens, base, layout, components, home)
public/              Favicon, wordmark, manifest, security headers
```

---

## Editing content without touching components

All copy and data live in `lib/`. Components only render it.

| What you want to change | File | Where |
| --- | --- | --- |
| Name, title, tagline, email, domain | `lib/site.ts` | `site` |
| Navigation links | `lib/site.ts` | `primaryNav`, `footerNav` |
| LinkedIn / GitHub / email links | `lib/site.ts` | `socialLinks` |
| Projects, tags, live links, status | `lib/projects.ts` | `projects` |
| Which projects are featured | `lib/projects.ts` | `featured: true` |
| Skills groups | `lib/content.ts` | `skillGroups` |
| About copy and values | `lib/content.ts` | `aboutPreview` |
| Resume facts and button label | `lib/content.ts` | `resumePreview` |
| FAQ questions | `lib/content.ts` | `faqItems` |
| Closing CTA copy | `lib/content.ts` | `contactCta` |
| Colours, spacing, type scale, motion | `styles/tokens.css` | CSS variables |

---

## Adding things later

**GitHub URL** - in `lib/site.ts`, find the `github` entry in `socialLinks`, set
`url` to your profile and change `isPlaceholder: true` to `false`. The icon
becomes a real link everywhere automatically (header, hero, footer, drawer).

**Project screenshots** - each project in `lib/projects.ts` has a `media: []`
array. Drop images into `public/` and add entries; the reserved media frame in
the card fills in with no layout change. Until then it shows an empty
"Screenshot area reserved" state - deliberately no fake mockups.

**Profile photo** - the hero currently shows the MJH monogram. Replace
`<Monogram />` inside `components/home/Hero.tsx` with a real headshot when ready.

**Resume PDF** - add `public/resume.pdf`, then in `lib/content.ts` update
`resumePreview.downloadLabel` and enable the button in
`components/home/ResumePreview.tsx`.

**Blog** - the information architecture reserves `/blog`. Add `app/blog/` and a
nav entry in `lib/site.ts`; nothing else needs to change.

**Geist font** - Manrope is used as the PRD-approved fallback because Geist is
not on Google Fonts. To switch, change the font import in `app/layout.tsx` only;
it feeds the `--font-display` variable that the CSS already reads.

---

## Design system summary

- **Dark by default**, optional light mode. Theme is stored in `localStorage`
  under `mjh-theme` and applied before paint, so there is no flash.
- **Colours** - charcoal `#0F172A`, electric blue `#3B82F6`, cyan `#06B6D4`,
  soft white `#F8FAFC`, slate `#94A3B8`. Colour guides attention, never
  decorates alone.
- **Type** - Inter for UI, Manrope for display, fluid `clamp()` scale.
- **Motion** - fade/slide reveals, soft hovers, scroll progress bar. Every
  animation is disabled under `prefers-reduced-motion`.
- **Accessibility** - semantic landmarks, skip link, visible focus rings,
  keyboard-operable drawer and accordion, status never signalled by colour
  alone, 44px minimum touch targets. Target: WCAG 2.2 AA where practical.

---

## Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. Cloudflare dashboard - **Workers & Pages** - **Create** - **Pages** -
   **Connect to Git**, then pick the repository.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `20`
4. Add the custom domain `julmothossain.me` under **Custom domains**.
   HTTPS and the global CDN are automatic.
5. Every push to the default branch redeploys.

`public/_headers` ships security headers (nosniff, frame-deny, HSTS,
referrer and permissions policy) and immutable caching for hashed assets.

---

## Privacy

Only professional contact details are published: `contact@julmothossain.me` and
LinkedIn. No phone number, no address, no API keys or tokens, no private
repository links, and no internal automation details. Private tools are listed
with a clear "Private" status instead of a broken or misleading link.
