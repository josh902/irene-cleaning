import { SectionHeader } from "../ui/SectionHeader";
import { WhyItem } from "./WhyItem";
import { whyUs, certifications } from "@/data/whyUs";

export default function WhySection() {
  return (
    <section id="why-us">
      <div className="container mx-auto">
        <SectionHeader
          label="Why Choose Us"
          title="Local, registered, and always reliable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          <div className="space-y-6">
            {whyUs.map((item) => (
              <WhyItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="gradient-primary rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2">
              Registered & trusted
            </h3>
            <p className="text-sm md:text-base opacity-75 mb-8">
              Jophrey Cleaning Services is a formally registered Nova Scotia
              business — giving you full peace of mind.
            </p>

            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm md:text-base bg-white/10 rounded-xl p-3 border border-white/10"
                >
                  <span className="text-pink-mid font-bold text-lg">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
