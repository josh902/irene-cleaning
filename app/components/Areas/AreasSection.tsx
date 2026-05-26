import { SectionHeader } from "../ui/SectionHeader";
import { AreaPill } from "./AreaPill";
import { Reveal } from "../ui/Reveal";
import { serviceAreas } from "@/data/areas";

export default function AreasSection() {
  return (
    <section id="areas" className="bg-cream">
      <div className="container mx-auto">
        <Reveal>
          <SectionHeader
            label="Service Areas"
            title="We come to you."
            subtitle="Jophrey Cleaning serves Halifax and the greater HRM — bringing the same care and attention to every home, every time."
          />
        </Reveal>

        <div className="flex flex-wrap gap-3 mt-12">
          {serviceAreas.map((area, idx) => (
            <Reveal key={area.id} delay={idx * 50}>
              <AreaPill name={area.name} isMain={area.isMain} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={serviceAreas.length * 50 + 50}>
          <p className="mt-8 text-sm text-text-muted">
            Don&apos;t see your area?{" "}
            <a
              href="#contact"
              className="text-pink font-semibold hover:underline transition-colors"
            >
              Reach out →
            </a>{" "}
            — we probably cover it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
