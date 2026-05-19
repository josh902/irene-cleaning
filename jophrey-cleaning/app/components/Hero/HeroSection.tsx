import Button from "../ui/Button";
import { HeroCard } from "./HeroCard";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(106,16,64,0.75) 0%, rgba(194,24,91,0.75) 100%), url('/images/image1.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-pale opacity-60"
        style={{ transform: "translate(50%, -50%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-pink-mid opacity-15"
        style={{ transform: "translate(0, 50%)" }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-pink-pale text-purple px-4 py-2 rounded-full border border-pink-mid mb-6 font-playfair italic text-xs md:text-sm">
              "Actions Speak Louder Than Words"
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white mb-6 leading-tight">
              Halifax's most
              <br />
              <em className="text-pink-mid italic">trusted</em> local
              <br />
              cleaning service.
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-md">
              Friendly, reliable, and professionally registered. Irene and the
              Jophrey team bring everything needed to leave your home sparkling
              — every single time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#contact">
                Get a free quote
              </Button>
              <Button variant="outline" href="#services">
                Our services
              </Button>
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
