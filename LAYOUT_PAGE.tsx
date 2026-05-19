/**
 * ============================================
 * app/layout.tsx
 * ============================================
 * 
 * Root layout - wraps ALL pages
 * 
 * RESPONSIBILITIES:
 * 1. Import fonts
 * 2. Set up global styles
 * 3. Add Navbar and Footer
 * 4. Meta tags (SEO)
 * 
 * STRUCTURE:
 * - <html> tag with lang attribute
 * - <head> with meta tags and fonts
 * - <body> with:
 *   - Navbar
 *   - {children} (page content)
 *   - Footer
 * 
 * HOW IT WORKS:
 * Next.js automatically wraps every page with this layout
 * So Navbar and Footer appear on every page automatically
 * 
 * ============================================
 */

import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Import fonts from Google Fonts
// This ensures they're optimized and cached
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dmsans",
});

// Meta tags for SEO
export const metadata: Metadata = {
  title: "Jophrey Cleaning Services | Professional Cleaning in Halifax, NS",
  description:
    "Professional residential and commercial cleaning services in Halifax. Friendly, reliable, and registered. Get a free quote today!",
  keywords: [
    "cleaning services",
    "Halifax",
    "residential cleaning",
    "house cleaning",
    "professional cleaner",
  ],
  openGraph: {
    title: "Jophrey Cleaning Services",
    description: "Professional cleaning services in Halifax, NS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmsans.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* No additional meta tags needed - Next.js handles most */}
      </head>
      <body className="font-dmsans text-text bg-white">
        {/* Navbar - appears on all pages */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer - appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}


/**
 * ============================================
 * app/page.tsx
 * ============================================
 * 
 * Homepage (/ route)
 * 
 * RESPONSIBILITY:
 * Compose all sections into one page
 * 
 * STRUCTURE:
 * 1. HeroSection - Large banner at top
 * 2. ServicesSection - Service grid
 * 3. GallerySection - Before/after style section
 * 4. WhySection - Why choose us
 * 5. OwnerSection - Meet Irene
 * 6. AreasSection - Service areas
 * 7. ContactSection - Contact form + info
 * 
 * HOW IT WORKS:
 * Each section is a React component
 * We import them and render them in sequence
 * This is like stacking building blocks
 * 
 * RESPONSIVE:
 * Each component handles its own responsive design
 * Using Tailwind's md: and lg: prefixes
 * So no extra work needed here!
 * 
 * ============================================
 */

import HeroSection from "@/components/Hero/HeroSection";
import ServicesSection from "@/components/Services/ServicesSection";
import GallerySection from "@/components/Gallery/GallerySection";
import WhySection from "@/components/WhyUs/WhySection";
import OwnerSection from "@/components/Owner/OwnerSection";
import AreasSection from "@/components/Areas/AreasSection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      {/* Each section is a full-width block */}
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <WhySection />
      <OwnerSection />
      <AreasSection />
      <ContactSection />
    </>
  );
}
