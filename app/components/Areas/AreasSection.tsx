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
            subtitle="Based in Halifax, we serve a wide area across HRM and surrounding communities. Not sure if we cover your area? Just ask!"
          />
        </Reveal>

        <Reveal className="flex flex-wrap gap-3 mt-12">
          {serviceAreas.map((area) => (
            <AreaPill
              key={area.id}
              name={area.name}
              isMain={area.isMain}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
