import { ContactWay } from "./ContactWay";
import { QuoteForm } from "./QuoteForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-purple py-20 md:py-24 px-6 md:px-12"
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-pink-mid mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-4">
            Ready for a cleaner home?
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed">
            Call, email, or fill out the form — Irene will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <div className="space-y-4">
            <ContactWay
              icon="📞"
              label="Call or text"
              value="(902) 221-7139"
              href="tel:9022217139"
            />
            <ContactWay
              icon="✉️"
              label="Email"
              value="aligynirene44@gmail.com"
              href="mailto:aligynirene44@gmail.com"
            />
            <ContactWay
              icon="📘"
              label="Facebook"
              value="Jophrey Cleaning Services"
              href="https://www.facebook.com/profile.php?id=61588232784929"
              external
            />
            <ContactWay
              icon="📍"
              label="Based in"
              value="101 Cutter Dr, Halifax, NS"
              isAddress
            />
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
