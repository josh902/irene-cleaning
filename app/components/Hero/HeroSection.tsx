import Button from "../ui/Button";
import { HeroCard } from "./HeroCard";
import { Icon } from "../ui/Icon";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden min-h-[88svh] md:min-h-[92vh] lg:min-h-screen pt-12 pb-16 md:py-24"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Uniform base: strong on mobile (full-width text), lighter on desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-purple/75 lg:bg-purple/40"
      />
      {/* Directional layer: darkens left side on all breakpoints for premium depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(80,10,48,0.50) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink-pale opacity-60"
        style={{ transform: "translate(50%, -50%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full bg-pink-mid opacity-15"
        style={{ transform: "translate(0, 50%)" }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-pink-pale text-purple px-4 py-2 rounded-full border border-pink-mid mb-3 md:mb-6 font-playfair italic text-xs md:text-sm">
              "Actions Speak Louder Than Words"
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white mb-4 md:mb-6 leading-tight text-balance">
              Halifax cleaning where the{" "}
              <em className="text-pink-mid italic">owner</em> shows up — to
              every single job.
            </h1>

            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-md text-pretty">
              Irene personally works on every cleaning alongside her team — so
              you always know who&apos;s coming into your home. Supplies
              included, professionally registered, and flexible around your
              schedule.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#quote-form">
                Get a free quote
              </Button>
              <Button variant="outline-light" href="#services">
                Our services
              </Button>
            </div>

            <div className="flex items-start gap-2 mt-4 text-white/65">
              <Icon
                name="shield"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                strokeWidth={2}
              />
              <p className="text-xs md:text-sm italic leading-snug">
                Not completely satisfied? Irene will personally return to make
                it right, at no additional cost.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}
