# 🎨 Jophrey Cleaning - Next.js Migration Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

---

## 📝 Step-by-Step Installation

### **Step 1: Create Next.js Project**

```bash
cd "c:\Irenes Web"
npx create-next-app@latest jophrey-cleaning --typescript --tailwind --eslint --app
```

**When prompted, select:**
- TypeScript? **Yes**
- ESLint? **Yes**
- Tailwind CSS? **Yes**
- `src/` directory? **No**
- App Router? **Yes**
- Customize import alias? **No**

This creates a `jophrey-cleaning/` folder with:
```
jophrey-cleaning/
├── app/                    (pages and layout)
├── components/             (React components)
├── public/                 (static files, images)
├── tailwind.config.ts      (Tailwind configuration)
├── package.json            (dependencies)
└── tsconfig.json           (TypeScript config)
```

### **Step 2: Navigate to Project**

```bash
cd jophrey-cleaning
```

### **Step 3: Install Additional Dependencies**

```bash
npm install
```

This installs Next.js, React, Tailwind CSS, and other dependencies.

### **Step 4: Copy Assets**

Copy your images from the old project:
- From: `c:\Irenes Web\images\`
- To: `c:\Irenes Web\jophrey-cleaning\public\images\`

### **Step 5: Replace Configuration Files**

Replace the generated files with the optimized versions provided:
1. `tailwind.config.ts` - Brand colors and typography
2. `next.config.js` - Font configuration
3. `globals.css` - Global styles
4. App files and components

### **Step 6: Create Component Structure**

Create these folders in `app/` and `components/`:
```
components/
├── ui/                    (reusable UI components)
│   ├── Button.tsx
│   └── Badge.tsx
├── Hero/
│   ├── HeroSection.tsx
│   ├── HeroCard.tsx
│   ├── ServicePill.tsx
│   └── TrustBadge.tsx
├── Services/
│   ├── ServicesSection.tsx
│   └── ServiceCard.tsx
├── Gallery/
│   └── GallerySection.tsx
├── WhyUs/
│   ├── WhySection.tsx
│   ├── WhyItem.tsx
│   └── CertList.tsx
├── Owner/
│   └── OwnerSection.tsx
├── Areas/
│   ├── AreasSection.tsx
│   └── AreaPill.tsx
├── Contact/
│   ├── ContactSection.tsx
│   └── QuoteForm.tsx
├── Navbar.tsx
└── Footer.tsx

data/
├── services.json
├── whyUs.json
└── areas.json
```

### **Step 7: Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

---

## 📦 What Each File Does

### **Tailwind Config** (`tailwind.config.ts`)
- Defines brand colors (purple, pink, cream)
- Sets up font families
- Configures responsive breakpoints

### **Global Styles** (`globals.css`)
- Imports fonts from Google Fonts
- Sets base typography and spacing
- Defines CSS variables for consistency

### **Components**
Each component is a **reusable React function** that:
- Returns JSX (HTML-like syntax)
- Takes `props` for customization
- Uses Tailwind classes for styling
- Is typed with TypeScript for safety

### **Data Files**
JSON files that contain:
- Service descriptions
- "Why Us" features
- Service areas
- This keeps content separate from code (easier to update)

### **Layout** (`app/layout.tsx`)
- Wraps all pages
- Contains `<Navbar />` and `<Footer />`
- Sets up fonts and meta tags

### **Homepage** (`app/page.tsx`)
- Composes all sections into one page
- Imports components and renders them
- Responsive on all devices

---

## 🎨 Design System Overview

### **Brand Colors** (from `tailwind.config.ts`)
```typescript
colors: {
  purple: '#6a1040',           // Primary brand color
  'purple-dark': '#4a0a2e',    // Footer background
  pink: '#c2185b',             // Accent color
  'pink-light': '#e91e8c',     // Hover states
  'pink-pale': '#fce4ec',      // Light backgrounds
  'pink-mid': '#f48fb1',       // Borders
  cream: '#fdf8fb',            // Light backgrounds
}
```

### **Typography**
- **Playfair Display**: Headings, premium serif font
- **DM Sans**: Body text, clean sans-serif font

### **Responsive Breakpoints**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Tailwind uses `md:` and `lg:` prefixes:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  // Small on mobile, medium on tablet, large on desktop
</div>
```

---

## 🔧 File Explanations

### **TypeScript in React Components**

Every component follows this pattern:
```typescript
interface Props {
  title: string;
  description: string;
}

export default function MyComponent({ title, description }: Props) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

**What this does:**
- `interface Props` - Defines what data the component receives
- `{ title, description }` - Destructures props (like unpacking a box)
- `className` - Tailwind classes (no need for separate CSS files!)
- JSX - HTML-like syntax inside JavaScript

### **Tailwind Classes Explained**

Instead of CSS, you write class names:
```jsx
{/* Old CSS way */}
<style>
  .button {
    padding: 12px 24px;
    background: #c2185b;
    color: white;
    border-radius: 100px;
  }
</style>

{/* Tailwind way */}
<button className="px-6 py-3 bg-pink rounded-full text-white">
  Click me
</button>
```

**Common Tailwind utilities:**
- `p-4` = padding: 1rem (4 × 0.25rem)
- `bg-pink` = background-color (using brand color)
- `text-white` = color: white
- `rounded-full` = border-radius: 9999px
- `md:grid-cols-2` = grid-template-columns: repeat(2, minmax(0, 1fr)) on tablet+
- `hover:bg-purple` = background changes on hover

---

## 📁 Component Tree

```
Layout (app/layout.tsx)
├── <Navbar />
├── <HeroSection />
│   ├── <HeroCard />
│   ├── <ServicePill /> (3x)
│   └── <TrustBadge /> (3x)
├── <ServicesSection />
│   └── <ServiceCard /> (6x, from services.json)
├── <GallerySection />
├── <WhySection />
│   ├── <WhyItem /> (4x, from whyUs.json)
│   └── <CertList />
├── <OwnerSection />
├── <AreasSection />
│   └── <AreaPill /> (multiple, from areas.json)
├── <ContactSection />
│   └── <QuoteForm />
└── <Footer />
```

---

## 🚀 Next Steps After Setup

1. **Copy Images**: Move image files to `public/images/`
2. **Replace Config Files**: Use the provided tailwind.config.ts and next.config.js
3. **Create Components**: Build each component (provided in next phase)
4. **Test**: Run `npm run dev` and check all pages
5. **Deploy**: Use Vercel (recommended) or your host

---

## 💡 Learning Tips

1. **Start small**: Understand one component at a time
2. **Use DevTools**: Right-click → Inspect to see rendered HTML
3. **Tailwind Docs**: https://tailwindcss.com/docs - your best friend!
4. **TypeScript**: Use the error messages to learn - they're helpful!
5. **Hot reload**: Changes save automatically as you code

---

## 🆘 Common Issues

### **Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

### **Module not found errors**
- Check file paths (case-sensitive on Mac/Linux)
- Ensure imports match export names

### **Styles not showing**
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure tailwind.config.ts includes correct paths
- Check that `globals.css` is imported in layout.tsx

### **Images not loading**
- Verify files are in `public/` folder
- Use paths like `/images/photo.jpg` (not `./images/`)

---

## 📞 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

---

## 🎯 What You're Building

A modern, responsive cleaning services website with:
- ✅ Luxury brand aesthetic (purple + pink)
- ✅ Fully responsive design
- ✅ Reusable React components
- ✅ Type-safe TypeScript code
- ✅ Professional agency standards
- ✅ Fast performance with Next.js
- ✅ Easy to maintain and update

Ready to start building components? Follow the files provided in order! 🎨
