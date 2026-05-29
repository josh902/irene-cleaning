import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

const steps = [
  {
    number: 1,
    icon: "phone",
    title: "Request a quote",
    description:
      "Submit the form or call or text Irene directly. She personally handles every inquiry — you'll always hear back from her, not a call centre.",
  },
  {
    number: 2,
    icon: "calendar",
    title: "Book a time that fits your life",
    description:
      "Irene will find a slot that works for you. No narrow booking windows or take-it-or-leave-it scheduling.",
  },
  {
    number: 3,
    icon: "sparkles",
    title: "Irene arrives with her team",
    description:
      "She brings her team, all the supplies, and the same standard she holds herself to at every single home. You just have to let them in.",
  },
  {
    number: 4,
    icon: "shield",
    title: "You check, we fix, then we leave",
    description:
      "Irene checks in with you before the team goes. If something was missed, she corrects it on the spot. Not satisfied after that? She returns at no additional cost — no arguments, no hassle.",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-cream">
      <div className="container mx-auto">
        <Reveal>
          <SectionHeader
            label="How It Works"
            title="Here's exactly what happens when you book"
            subtitle="No surprises. No strangers. No hassle."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {steps.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 100}>
              <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-pink-pale flex items-center justify-center flex-shrink-0">
                    <Icon name={step.icon} className="w-5 h-5 text-pink" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-purple mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
