import { SectionHeader } from "../ui/SectionHeader";
import { AreaPill } from "./AreaPill";
import { serviceAreas } from "@/data/areas";

export default function AreasSection() {
  return (
    <section id="areas" className="bg-cream">
      <div className="container mx-auto">
        <SectionHeader
          label="Service Areas"
          title="We come to you."
          subtitle="Based in Halifax, we serve a wide area across HRM and surrounding communities. Not sure if we cover your area? Just ask!"
        />

        <div className="flex flex-wrap gap-3 mt-12">
          {serviceAreas.map((area) => (
            <AreaPill
              key={area.id}
              name={area.name}
              isMain={area.isMain}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
