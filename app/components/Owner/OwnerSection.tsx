import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";

export default function OwnerSection() {
  return (
    <section id="owner">
      <div className="container mx-auto">
        <SectionHeader
          label="Meet The Owner"
          title="Irene — Your Trusted Cleaning Professional"
        />

        <div className="gradient-subtle rounded-2xl sm:rounded-3xl border-2 border-pink-pale p-6 sm:p-8 md:p-12 lg:p-16 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-72 sm:h-96 md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/image3.jpg"
                  alt="Irene Aliguyon, Owner & Founder of Jophrey Cleaning Services"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-base md:text-lg text-text-muted leading-relaxed mb-4">
                With years of professional cleaning experience and a genuine
                passion for helping Halifax families feel at home, Irene founded
                Jophrey Cleaning Services on one simple principle:{" "}
                <strong>treat every home like your own.</strong>
              </p>

              <p className="text-base md:text-lg text-text-muted leading-relaxed mb-8">
                Irene personally oversees every cleaning to ensure the highest
                standards of quality, professionalism, and care. She's built her
                business on trust, reliability, and the belief that a clean home
                is a happy home.
              </p>

              <div className="bg-pink-pale rounded-xl border-l-4 border-pink p-5 sm:p-6 md:p-8">
                <p className="font-playfair text-lg md:text-xl italic font-semibold text-pink">
                  "Actions speak louder than words — that's why I'm personally
                  invested in every single job we do."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
