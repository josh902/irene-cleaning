import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "../ui/Reveal";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto">
        <Reveal>
          <SectionHeader
            label="Services"
            title="Every clean, done right."
            subtitle="From regular upkeep to deep move-out cleans — we handle it all and bring every supply needed."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 80}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                isHighlighted={service.isHighlighted}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
