import { ContactWay } from "./ContactWay";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "../ui/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-purple">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-pink-mid mb-2">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-white mb-4 text-balance">
              Ready for a cleaner home?
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed">
              Call, email, or fill out the form — Irene will get back to you promptly.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <Reveal className="space-y-4">
            <ContactWay
              icon="phone"
              label="Call or text"
              value="(902) 221-7139"
              href="tel:9022217139"
            />
            <ContactWay
              icon="mail"
              label="Email"
              value="aligynirene44@gmail.com"
              href="mailto:aligynirene44@gmail.com"
            />
            <ContactWay
              icon="facebook"
              label="Facebook"
              value="Jophrey Cleaning Services"
              href="https://www.facebook.com/profile.php?id=61588232784929"
              external
            />
            <ContactWay
              icon="pin"
              label="Service Area"
              value="Serving Halifax, Bedford, Dartmouth & surrounding areas"
              isAddress
            />
          </Reveal>

          <div id="quote-form">
            <Reveal delay={150}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
