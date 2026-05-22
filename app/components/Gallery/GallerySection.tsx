import { SectionHeader } from "../ui/SectionHeader";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="bg-cream">
      <div className="container mx-auto">
        <SectionHeader
          label="Our Work"
          title="Transformation In Action"
          subtitle="See the quality and attention to detail we bring to every cleaning job."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12">
          <div className="order-2 lg:order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/image2.avif"
                alt="Professional cleaning service showcase"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-purple mb-4">
              Professional Results, Every Time
            </h3>
            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-6">
              From living rooms to kitchens, from bedrooms to bathrooms — we
              bring the same level of care and attention to every room in your
              home. Our team uses professional-grade equipment and eco-friendly
              products to deliver spotless results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-l-4 border-pink">
                <span className="text-2xl">✓</span>
                <span className="font-semibold text-purple">
                  Detailed, thorough cleaning in every corner
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-l-4 border-pink">
                <span className="text-2xl">✓</span>
                <span className="font-semibold text-purple">
                  Safe, quality products for your family
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
