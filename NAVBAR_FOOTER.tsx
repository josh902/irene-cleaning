/**
 * ============================================
 * components/Navbar.tsx
 * ============================================
 * 
 * Sticky navigation bar at top of page
 * 
 * FEATURES:
 * - Logo with brand colors (Jophrey Cleaning)
 * - Navigation links (Services, Why Us, Areas, Contact)
 * - CTA button (Get a Quote)
 * - Glass-morphism effect (blurred transparent background)
 * - Responsive: menu hidden on mobile (you can add hamburger menu later)
 * 
 * EXPLANATION:
 * - "use client" = Client component (interactive features)
 * - "sticky" class keeps nav at top while scrolling
 * - Links use smooth scroll to sections (href="#services", etc)
 * - Styling uses Tailwind classes instead of separate CSS
 * 
 * ============================================
 */

"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-1">
          <div className="font-playfair text-lg md:text-xl font-semibold text-purple">
            Jophrey{" "}
            <span className="text-pink italic">
              Cleaning
            </span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-text-muted font-medium hover:text-pink transition-colors"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="text-sm text-text-muted font-medium hover:text-pink transition-colors"
          >
            Why Us
          </a>
          <a
            href="#areas"
            className="text-sm text-text-muted font-medium hover:text-pink transition-colors"
          >
            Areas
          </a>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="btn-primary text-xs md:text-sm"
          >
            Get a Quote
          </a>
        </div>

        {/* MOBILE MENU BUTTON (optional - implement later) */}
        <button className="md:hidden text-pink">
          ☰
        </button>
      </div>
    </nav>
  );
}


/**
 * ============================================
 * components/Footer.tsx
 * ============================================
 * 
 * Footer with business info and links
 * 
 * FEATURES:
 * - Dark purple background (brand color)
 * - Contact info (phone, email)
 * - Service area summary
 * - Tagline
 * 
 * STYLING NOTES:
 * - bg-purple-dark = dark purple background
 * - text-white = white text
 * - Uses opacity for secondary text (rgba style)
 * 
 * ============================================
 */

export function Footer() {
  return (
    <footer className="bg-purple-dark text-center py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm text-white font-semibold mb-2">
          Jophrey Cleaning Services
        </p>
        <p className="text-xs text-white/60 italic mb-4">
          "Actions Speak Louder Than Words"
        </p>

        <p className="text-xs text-white/50 mb-2">
          Irene Aliguyon · (902) 221-7139 · aligynirene44@gmail.com
        </p>

        <p className="text-xs text-white/50">
          Halifax · Bedford · Dartmouth · Sackville & surrounding areas ·
          Registered NS Business · Est. 2022
        </p>
      </div>
    </footer>
  );
}
