/**
 * ============================================
 * components/Services/ServicesSection.tsx
 * ============================================
 * 
 * Main services section with grid of service cards
 * 
 * FEATURES:
 * - Uses SectionHeader for title + label
 * - Dynamic grid of service cards
 * - Imports services data from data/services.ts
 * - Responsive: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
 * 
 * KEY CONCEPT: "Dynamic Rendering"
 * Instead of hardcoding 6 cards, we:
 * 1. Import services array
 * 2. Use .map() to loop through each service
 * 3. Render ServiceCard for each one
 * This makes adding services super easy!
 * 
 * ============================================
 */

import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services"; // Import services data

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section header */}
        <SectionHeader
          label="Services"
          title="Every clean, done right."
          subtitle="From regular upkeep to deep move-out cleans — we handle it all and bring every supply needed."
        />

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


/**
 * ============================================
 * components/Services/ServiceCard.tsx
 * ============================================
 * 
 * Individual service card component
 * 
 * PROPS:
 * - icon: Emoji icon
 * - title: Service name
 * - description: Service description
 * - isHighlighted: Boolean to apply special styling
 * 
 * STYLING:
 * - Default: bg-cream with subtle border
 * - Highlighted: bg-pink-pale with pink border
 * - Hover: slight lift effect + shadow
 * 
 * INTERACTION:
 * - Hover state changes background + adds shadow
 * - transform: translateY(-2px) = slight upward movement
 * 
 * ============================================
 */

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export function ServiceCard({
  icon,
  title,
  description,
  isHighlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`p-7 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default
        ${
          isHighlighted
            ? "bg-pink-pale border-pink-mid"
            : "bg-cream border-border hover:bg-white"
        }
      `}
    >
      {/* Icon */}
      <div className="text-3xl md:text-4xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="font-playfair text-xl md:text-2xl font-semibold text-purple mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
