import { SectionHeader } from "../ui/SectionHeader";
import { WhyItem } from "./WhyItem";
import { Reveal } from "../ui/Reveal";
import { whyUs, certifications } from "@/data/whyUs";
import { Check } from "lucide-react";

export default function WhySection() {
  return (
    <section id="why-us">
      <div className="container mx-auto">
        <Reveal>
          <SectionHeader
            label="Why Choose Us"
            title="Local, registered, and always reliable."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          <div className="space-y-6">
            {whyUs.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 100}>
                <WhyItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="gradient-primary rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
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
                  <Check className="w-5 h-5 text-pink-mid flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  {cert}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
