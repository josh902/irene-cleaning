import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto">
        <SectionHeader
          label="Services"
          title="Every clean, done right."
          subtitle="From regular upkeep to deep move-out cleans — we handle it all and bring every supply needed."
        />

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
