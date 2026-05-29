# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working style

Before writing any code, ask clarifying questions until you are 95% confident you fully understand what is needed. Never take shortcuts or make assumptions.

Do not move on to the next task until you are 95% confident the current one is complete and correct.

## Commands

```bash
npm run dev      # Start dev server (Next.js on localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

Package manager: **npm** (package-lock.json). No test suite is configured.

## Architecture

This is a single-page marketing site for **Jophrey Cleaning Services** (Irene's cleaning business in Halifax, NS), built with **Next.js 16 + React 19 + Tailwind CSS v4**.

### Data layer

All site content lives in `data/` as typed TypeScript arrays — not fetched from an API:

- `data/services.ts` — `Service[]` (id, icon, title, description, isHighlighted?)
- `data/areas.ts` — `Area[]` (id, name, isMain?)
- `data/whyUs.ts` — `WhyItem[]` + `certifications` string array

Components import directly from `@/data/*`. To add/change content (new service, new area, etc.), edit these files — the UI picks it up automatically.

**Data flags:**
- `isHighlighted` on `Service` — marks the "Not sure what you need?" card; `ServiceCard` renders it with a distinct visual treatment
- `isMain` on `Area` — marks the four primary cities (Halifax, Bedford, Dartmouth, Sackville); `AreaPill` styles these differently

### Component structure

`app/components/` is organized by page section, mirroring the single-page scroll layout:

```
Navbar → Hero → Services → Gallery → WhyUs → Owner → Areas → Contact → Footer
```

Each section folder (e.g. `Hero/`, `Services/`) contains the section component plus any sub-components it owns. Shared primitives are in `ui/` (Button, Icon, Reveal, SectionHeader).

`app/page.tsx` is intentionally minimal — it just composes the section components in order. The page is a single route; all navigation is anchor-scroll (`#services`, `#contact`, etc.).

### Client components

Exactly three components use `"use client"`:

| Component | Why |
|-----------|-----|
| `app/components/ui/Reveal.tsx` | `IntersectionObserver` + state for scroll animation |
| `app/components/Navbar.tsx` | Mobile menu toggle state + keyboard handlers |
| `app/components/Contact/QuoteForm.tsx` | Form state + submission flow |

Everything else is a Server Component. Don't add `"use client"` without a specific reason.

### UI primitives

**`Button`** ([app/components/ui/Button.tsx](app/components/ui/Button.tsx)) — polymorphic: renders `<a>` when `href` is passed, `<button>` otherwise. Always use this for CTAs.

**`Icon`** ([app/components/ui/Icon.tsx](app/components/ui/Icon.tsx)) — central Lucide icon registry. All icon names used in `data/` (e.g. `"home"`, `"phone"`, `"mail"`) resolve through this component's `iconMap`. To add a new icon: import it from `lucide-react` and add it to the map. Don't import Lucide icons directly in section components.

**`Reveal`** ([app/components/ui/Reveal.tsx](app/components/ui/Reveal.tsx)) — scroll fade-in animation via `IntersectionObserver`. **This project has no Framer Motion or GSAP** — use `Reveal` for all scroll animations. Usage:

```tsx
<Reveal delay={idx * 80}>
  <ServiceCard ... />
</Reveal>
```

Stagger children with `delay={idx * 80}` or `delay={idx * 100}`. Automatically respects `prefers-reduced-motion`.

**`SectionHeader`** — section label + heading + optional subtitle. Use it for the top of every section to maintain consistent visual rhythm.

### Styling

Tailwind CSS v4 (PostCSS plugin via `@tailwindcss/postcss`), but the project uses a **v3-format config file** (`tailwind.config.ts`) loaded via `@config "../tailwind.config.ts"` at the top of `app/globals.css`. Edit tokens in `tailwind.config.ts` — not in `globals.css`.

**Color tokens** (use these, never hardcode hex):

| Token | Hex | Usage |
|-------|-----|-------|
| `purple` | #6a1040 | Primary brand (dark plum) |
| `purple-dark` | #4a0a2e | Hover / deep variant |
| `pink` | #c2185b | Accent / icon fills |
| `pink-light` | #e91e8c | Bright accent |
| `pink-pale` | #fce4ec | Light backgrounds |
| `pink-mid` | #f48fb1 | Mid-tone fills |
| `cream` | #fdf8fb | Page background |
| `text` | #2a0a1a | Body text |
| `text-muted` | #7a4060 | Secondary text |
| `border` | #e8c8d8 | Borders / dividers |

**Fonts:** `font-playfair` (headings, Playfair Display), `font-dmsans` (body, DM Sans).

Google Fonts are loaded via `@import url(...)` at the very first line of `globals.css` — keep it first.

**Global CSS utilities** in `app/globals.css` — use these instead of reinventing inline:
- `.btn-primary` — primary CTA button styles
- `.section-label` — small uppercase section label
- `.form-group` — form field wrapper with label
- `.glass` — frosted glass card effect
- Gradient helpers for brand background treatments

### Next config

`next.config.js` holds business contact info as `NEXT_PUBLIC_*` env vars (`NEXT_PUBLIC_BUSINESS_NAME`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`) and image cache headers for `/images/*`. Static images live in `public/images/` (Next.js serves `public/` at the URL root).

### Path alias

`@/` maps to the project root (see `tsconfig.json`), so imports look like `@/data/services` or `@/app/components/ui/Button`.

### Contact form

`QuoteForm` has no backend. On submit it swaps to an in-form thank-you screen with a "Send another request" reset link. Form state is local `useState`; it imports `services` from the data layer to populate the service dropdown.
