/**
 * ============================================
 * components/Hero/HeroSection.tsx
 * ============================================
 * 
 * Large hero banner section at top of page
 * 
 * STRUCTURE:
 * - Left side: Text content (heading, subheading, CTA buttons)
 * - Right side: HeroCard with service pills (hidden on mobile)
 * 
 * STYLING:
 * - Gradient background (purple + pink)
 * - Fixed background image
 * - Decorative circles (via CSS)
 * - min-h-[90vh] = 90% of viewport height
 * 
 * ============================================
 */

import Button from "../ui/Button";
import { HeroCard } from "./HeroCard";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(106,16,64,0.75) 0%, rgba(194,24,91,0.75) 100%), url('/images/image1.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Decorative circles (positioned absolutely) */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-pale opacity-60"
        style={{ transform: "translate(50%, -50%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-pink-mid opacity-15"
        style={{ transform: "translate(0, 50%)" }}
      />

      {/* Content grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Text Content */}
          <div className="max-w-xl">
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-pink-pale text-purple px-4 py-2 rounded-full border border-pink-mid mb-6 font-playfair italic text-xs md:text-sm">
              "Actions Speak Louder Than Words"
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white mb-6 leading-tight">
              Halifax's most
              <br />
              <em className="text-pink-mid italic">trusted</em> local
              <br />
              cleaning service.
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-md">
              Friendly, reliable, and professionally registered. Irene and the
              Jophrey team bring everything needed to leave your home sparkling
              — every single time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#contact">
                Get a free quote
              </Button>
              <Button variant="outline" href="#services">
                Our services
              </Button>
            </div>
          </div>

          {/* RIGHT: Hero Card (hidden on mobile) */}
          <div className="hidden lg:block">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}


/**
 * ============================================
 * components/Hero/HeroCard.tsx
 * ============================================
 * 
 * White card displayed on right side of hero
 * Shows what services we offer with pills
 * 
 * STRUCTURE:
 * - Title
 * - 3x ServicePill components
 * - 3x TrustBadge components
 * 
 * ============================================
 */

import { ServicePill } from "./ServicePill";
import { TrustBadge } from "./TrustBadge";

export function HeroCard() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 border border-border shadow-lg">
      {/* Card title */}
      <h3 className="font-playfair text-xl md:text-2xl text-purple font-semibold mb-6">
        What we clean
      </h3>

      {/* Service pills */}
      <div className="space-y-3 mb-6">
        <ServicePill
          icon="🏡"
          label="Residential homes"
          sub="Full home cleaning, any size"
        />
        <ServicePill
          icon="🏢"
          label="Condos & apartments"
          sub="Compact spaces, full service"
        />
        <ServicePill
          icon="📦"
          label="Move-in / move-out"
          sub="Leave it spotless for the next chapter"
        />
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
        <TrustBadge text="✓ Supplies included" />
        <TrustBadge text="✓ Registered since 2022" />
        <TrustBadge text="✓ Flexible scheduling" />
      </div>
    </div>
  );
}


/**
 * ============================================
 * components/Hero/ServicePill.tsx
 * ============================================
 * 
 * Reusable pill component showing a service
 * with icon, label, and description
 * 
 * PROPS:
 * - icon: Emoji
 * - label: Service name
 * - sub: Short description
 * 
 * ============================================
 */

interface ServicePillProps {
  icon: string;
  label: string;
  sub: string;
}

export function ServicePill({ icon, label, sub }: ServicePillProps) {
  return (
    <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-cream border border-border">
      {/* Icon container */}
      <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-pink-pale flex items-center justify-center text-xl">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="font-medium text-sm md:text-base text-text">{label}</p>
        <p className="text-xs text-text-muted">{sub}</p>
      </div>
    </div>
  );
}


/**
 * ============================================
 * components/Hero/TrustBadge.tsx
 * ============================================
 * 
 * Small badge showing trust signals
 * 
 * PROPS:
 * - text: Badge text (with checkmark)
 * 
 * ============================================
 */

interface TrustBadgeProps {
  text: string;
}

export function TrustBadge({ text }: TrustBadgeProps) {
  return (
    <span className="inline-block bg-pink-pale text-purple px-3 py-1 rounded-full text-xs font-medium border border-pink-mid">
      {text}
    </span>
  );
}
