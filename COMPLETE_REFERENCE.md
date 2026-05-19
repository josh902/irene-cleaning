# 🎨 Complete Next.js Project - File Organization & Setup

## 📁 PROJECT STRUCTURE

```
jophrey-cleaning/
│
├── app/                          # Next.js App Router (pages)
│   ├── layout.tsx                # Root layout (wraps all pages)
│   ├── page.tsx                  # Homepage (/)
│   ├── globals.css               # Global styles
│   └── favicon.ico
│
├── components/                   # React components
│   │
│   ├── Navbar.tsx                # Sticky navigation bar
│   ├── Footer.tsx                # Footer component
│   │
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx            # Button component (primary, outline)
│   │   ├── Badge.tsx             # Badge component
│   │   └── SectionHeader.tsx     # Section header (label + title)
│   │
│   ├── Hero/                     # Hero section
│   │   ├── HeroSection.tsx       # Main hero component
│   │   ├── HeroCard.tsx          # White card with services
│   │   ├── ServicePill.tsx       # Individual service pill
│   │   └── TrustBadge.tsx        # Trust indicator badges
│   │
│   ├── Services/                 # Services section
│   │   ├── ServicesSection.tsx   # Main services grid
│   │   └── ServiceCard.tsx       # Individual service card
│   │
│   ├── Gallery/                  # Gallery section
│   │   └── GallerySection.tsx    # Image + content layout
│   │
│   ├── WhyUs/                    # Why Choose Us section
│   │   ├── WhySection.tsx        # Main why-us component
│   │   └── WhyItem.tsx           # Individual why-item
│   │
│   ├── Owner/                    # Owner section
│   │   └── OwnerSection.tsx      # Irene bio + image
│   │
│   ├── Areas/                    # Service areas section
│   │   ├── AreasSection.tsx      # Main areas component
│   │   └── AreaPill.tsx          # Individual area pill
│   │
│   └── Contact/                  # Contact section
│       ├── ContactSection.tsx    # Main contact component
│       ├── ContactWay.tsx        # Individual contact method
│       └── QuoteForm.tsx         # Quote request form
│
├── data/                         # Data files (content)
│   ├── services.ts               # Services array
│   ├── whyUs.ts                  # Why-us features + certs
│   └── areas.ts                  # Service areas
│
├── public/                       # Static files
│   ├── images/                   # Image assets
│   │   ├── image1.avif          # Hero background
│   │   ├── image2.avif          # Gallery image
│   │   └── image3.jpg           # Owner image
│   └── favicon.ico
│
├── .gitignore
├── next.config.js                # Next.js config + fonts
├── tailwind.config.ts            # Tailwind theme config
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
└── package-lock.json             # Locked versions
```

---

## 📝 FILE DESCRIPTIONS & RESPONSIBILITIES

### **app/layout.tsx** - Root Layout Wrapper
**What it does**: Wraps every page with header, footer, fonts
**Key imports**: Navbar, Footer, fonts, CSS
**Critical**: Must import globals.css here
```typescript
- Sets up fonts (Playfair Display, DM Sans)
- Adds metadata for SEO
- Wraps content with Navbar and Footer
```

### **app/page.tsx** - Homepage
**What it does**: Composes all sections into the homepage
**Key imports**: All 7 section components
**Pattern**: Import → Render in sequence
```typescript
- HeroSection
- ServicesSection
- GallerySection
- WhySection
- OwnerSection
- AreasSection
- ContactSection
```

### **app/globals.css** - Global Styles
**What it does**: Base typography, utilities, form styles
**Uses**: @tailwind directives to inject Tailwind layers
```css
- Imports Google Fonts
- Sets base HTML/body styles
- Defines heading styles (h1, h2, h3, h4)
- Button utility classes (.btn-primary, .btn-outline)
- Form input styles
- Media queries for responsive
```

### **components/Navbar.tsx** - Sticky Navigation
**Props**: None (uses hardcoded content)
**Features**: Logo, nav links, CTA button, glass effect
**Responsive**: Links hidden on mobile
```typescript
"use client" (interactive)
- Sticky positioning (top: 0, z-50)
- Links to page sections (href="#services")
- Smooth scroll (handled by browser)
```

### **components/Footer.tsx** - Footer
**Props**: None
**Features**: Contact info, tagline, business details
```typescript
- Dark purple background
- Centered text
- Responsive padding
```

### **components/ui/Button.tsx** - Reusable Button
**Props**: 
- `variant`: "primary" | "outline"
- `size`: "sm" | "md" | "lg"
- `href`: Optional (renders as link if provided)
- `children`: Button text

**Why reusable?** Every button has same style/behavior
```typescript
export default function Button({ children, variant = "primary", ...props })
- Renders as <button> or <a> (link)
- Combines size + variant classes
- Type-safe with interface
```

### **components/Hero/HeroSection.tsx** - Hero Banner
**Structure**: 2-column layout (text left, card right)
**Features**: 
- Gradient background with image
- Decorative circles
- Tagline badge
- CTA buttons
- HeroCard (right side)

**Responsive**: Card hidden on mobile

### **components/Hero/HeroCard.tsx** - White Info Card
**Props**: None (uses hardcoded services/badges)
**Contains**:
- ServicePill components (3x)
- TrustBadge components (3x)
- Title, spacing

### **components/Services/ServicesSection.tsx** - Services Grid
**Key Feature**: DYNAMIC RENDERING
```typescript
import { services } from "@/data/services";

services.map((service) => (
  <ServiceCard key={service.id} {...service} />
))
```
**Why?** Add services in data/services.ts → automatically renders!

### **components/Contact/QuoteForm.tsx** - Interactive Form
**"use client"** - Uses React state
```typescript
const [formData, setFormData] = useState({...})
const handleChange = (e) => {...}
const handleSubmit = (e) => {...}
```
**Features**:
- Two-column layout (First Name + Last Name)
- Dynamic service dropdown (from data)
- Form validation
- Submit alert + reset

---

## 🎨 DATA FILES STRUCTURE

### **data/services.ts**
```typescript
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export const services: Service[] = [
  {
    id: "residential",
    icon: "🏡",
    title: "Residential Cleaning",
    description: "..."
  },
  // ... 6 total services
]
```

### **data/whyUs.ts**
```typescript
export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const whyUs: WhyItem[] = [...]
export const certifications: string[] = [...]
```

### **data/areas.ts**
```typescript
export interface Area {
  id: string;
  name: string;
  isMain?: boolean;
}

export const serviceAreas: Area[] = [...]
```

**Why separate data files?**
- Easy to update content without touching code
- Can be converted to CMS/database later
- TypeScript interfaces ensure type safety
- Reusable across components

---

## 🎯 KEY CONCEPTS EXPLAINED

### **"use client" Directive**
```typescript
"use client"  // Allows React hooks: useState, useEffect, etc.

function MyComponent() {
  const [state, setState] = useState(...)  // ✅ Works with "use client"
}
```
**When to use:**
- Forms with `useState`
- Event listeners (onClick, onChange)
- Browser APIs (localStorage, window)
- Interactive elements

**Without "use client":** Server component (faster, better for SEO)

### **Dynamic Rendering with .map()**
```typescript
// Instead of hardcoding 6 ServiceCard components:
{services.map((service) => (
  <ServiceCard
    key={service.id}           // Required for lists!
    icon={service.icon}
    title={service.title}
    description={service.description}
  />
))}
```

### **Props & Interfaces**
```typescript
// Define what a component accepts
interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

// Component receives props
export default function Button(props: ButtonProps) {
  // Can now use: props.variant, props.size, etc.
}

// With destructuring (cleaner):
export default function Button({ variant = "primary", children }: ButtonProps) {
  return <button>{children}</button>
}
```

### **Tailwind Classes**
```typescript
// Instead of CSS:
<style>
  .card { padding: 2rem; background: white; border-radius: 1.5rem; }
</style>

// Tailwind way:
<div className="p-8 bg-white rounded-2xl">

// Responsive (mobile-first):
<div className="text-sm md:text-base lg:text-lg">
  // small on mobile → medium on tablet → large on desktop
</div>
```

---

## ✅ SETUP CHECKLIST

- [ ] Create Next.js project: `npx create-next-app@latest jophrey-cleaning --typescript --tailwind --app`
- [ ] Copy this plan + all component files to your project
- [ ] Copy `tailwind.config.ts` to project root
- [ ] Copy `next.config.js` to project root
- [ ] Copy `globals.css` to `app/`
- [ ] Create folder structure in `components/` and `data/`
- [ ] Copy all component files to respective folders
- [ ] Create `data/services.ts`, `data/whyUs.ts`, `data/areas.ts`
- [ ] Create `app/layout.tsx` and `app/page.tsx`
- [ ] Copy images to `public/images/`
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Test responsive design (mobile, tablet, desktop)

---

## 🚀 DEVELOPMENT COMMANDS

```bash
# Start development server (auto-reload on file changes)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

---

## 🔧 TAILWIND CONFIG HIGHLIGHTS

```typescript
// tailwind.config.ts
colors: {
  purple: "#6a1040",           // Primary
  pink: "#c2185b",             // Accent
  cream: "#fdf8fb",            // Light backgrounds
  // ... more colors
}

fontFamily: {
  playfair: ["Playfair Display", "serif"],     // Headings
  dmsans: ["DM Sans", "sans-serif"],           // Body
}
```

---

## 💡 STYLING PATTERNS

### **Section Wrapper**
```typescript
<section className="py-20 md:py-24 px-6 md:px-12">
  <div className="container mx-auto">
    {/* Content here */}
  </div>
</section>
```

### **Two-Column Layout**
```typescript
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div>Left side</div>
  <div>Right side</div>
</div>
```

### **Responsive Text**
```typescript
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Responsive heading
</h1>
```

### **Hover Effects**
```typescript
<div className="hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all">
  Card
</div>
```

---

## 🐛 COMMON ISSUES & SOLUTIONS

| Issue | Solution |
|-------|----------|
| Styles not showing | Clear cache: Ctrl+Shift+Delete, then restart dev server |
| Images not loading | Check `public/images/` path is correct |
| TypeScript errors | Run `npm run dev` to see full errors, fix based on types |
| Form not working | Ensure `"use client"` is at top of QuoteForm component |
| Navigation not scrolling | Check anchor IDs match href (e.g., `id="services"` ↔ `href="#services"`) |

---

## 📚 LEARNING RESOURCES

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **TypeScript Docs**: https://www.typescriptlang.org/docs/

---

## 🎯 NEXT STEPS AFTER SETUP

1. **Test Everything**: Make sure all sections render correctly
2. **Responsive Testing**: Use browser DevTools (F12) → mobile view
3. **Form Backend**: Connect QuoteForm to email service (e.g., SendGrid, Resend)
4. **Analytics**: Add Google Analytics tracking
5. **SEO**: Update meta tags in layout.tsx
6. **Deployment**: Deploy to Vercel (free, optimized for Next.js)

---

## 📞 EXAMPLE: Adding a New Service

1. Open `data/services.ts`
2. Add to `services` array:
```typescript
{
  id: "pet-friendly",
  icon: "🐾",
  title: "Pet-Friendly Cleaning",
  description: "..."
}
```
3. Save file
4. Done! 🎉 It automatically appears in ServicesSection

---

Good luck! You're building a professional, modern website! 🚀
