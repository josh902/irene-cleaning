import { ServicePill } from "./ServicePill";
import { TrustBadge } from "./TrustBadge";

export function HeroCard() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 border border-border shadow-lg">
      <h3 className="font-playfair text-xl md:text-2xl text-purple font-semibold mb-6">
        What we clean
      </h3>

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

      <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
        <TrustBadge text="✓ Supplies included" />
        <TrustBadge text="✓ Registered since 2022" />
        <TrustBadge text="✓ Flexible scheduling" />
      </div>
    </div>
  );
}
