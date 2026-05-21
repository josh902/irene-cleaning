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

No test suite is configured.

## Architecture

This is a single-page marketing site for **Jophrey Cleaning Services** (Irene's cleaning business in Halifax, NS), built with **Next.js 16 + React 19 + Tailwind CSS v4**.

### Data layer

All site content lives in `data/` as typed TypeScript arrays — not fetched from an API:

- `data/services.ts` — `Service[]` (id, icon, title, description, isHighlighted?)
- `data/areas.ts` — `Area[]` (id, name, isMain?)
- `data/whyUs.ts` — `WhyItem[]` + `certifications` string array

Components import directly from `@/data/*`. To add/change content (new service, new area, etc.), edit these files — the UI picks it up automatically.

### Component structure

`app/components/` is organized by page section, mirroring the single-page scroll layout:

```
Navbar → Hero → Services → Gallery → WhyUs → Owner → Areas → Contact → Footer
```

Each section folder (e.g. `Hero/`, `Services/`) contains the section component plus any sub-components it owns. Shared primitives are in `ui/` (Button, Badge, SectionHeader).

`app/page.tsx` is intentionally minimal — it just composes the section components in order. The page is a single route; all navigation is anchor-scroll (`#services`, `#contact`, etc.).

### Styling

Tailwind CSS v4 (PostCSS plugin via `@tailwindcss/postcss`). Custom design tokens are defined inside `app/globals.css` using `@theme inline`. The brand palette uses custom color names (`pink`, `purple`, `pink-pale`, `pink-mid`) and custom fonts (`font-playfair`, `font-dmsans`). Use these tokens rather than hardcoding hex values.

### Path alias

`@/` maps to the project root (see `tsconfig.json`), so imports look like `@/data/services` or `@/app/components/ui/Button`.

### Contact form

`QuoteForm` is a `"use client"` component — the only client component in the project. Currently submits via `alert()` only (no backend). Form state is local `useState`; it imports `services` from the data layer to populate the service dropdown.
