/**
 * ============================================
 * components/Gallery/GallerySection.tsx
 * ============================================
 * 
 * Two-column gallery section with image + content
 * 
 * LAYOUT:
 * - Left: Large image (400px height on desktop)
 * - Right: Text content with feature highlights
 * - Responsive: Stacks vertically on mobile
 * 
 * STYLING:
 * - bg-cream background
 * - Large shadow on image
 * - Feature items with left border accent
 * 
 * ============================================
 */

import { SectionHeader } from "../ui/SectionHeader";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="bg-cream py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section header */}
        <SectionHeader
          label="Our Work"
          title="Transformation In Action"
          subtitle="See the quality and attention to detail we bring to every cleaning job."
        />

        {/* Gallery grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-80 md:h-96 lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/image2.avif"
                alt="Professional cleaning service showcase"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>

          {/* Content */}
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

            {/* Feature highlights */}
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


/**
 * ============================================
 * components/WhyUs/WhySection.tsx
 * ============================================
 * 
 * Two-column "Why Choose Us" section
 * 
 * LAYOUT:
 * - Left: List of why-us items
 * - Right: Gradient box with certifications
 * - Responsive: Stacks on mobile
 * 
 * ============================================
 */

import { SectionHeader } from "../ui/SectionHeader";
import { WhyItem as WhyItemComponent } from "./WhyItem";
import { whyUs, certifications } from "@/data/whyUs";

export default function WhySection() {
  return (
    <section id="why-us" className="py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section header */}
        <SectionHeader
          label="Why Choose Us"
          title="Local, registered, and always reliable."
        />

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Left: Why items list */}
          <div className="space-y-6">
            {whyUs.map((item) => (
              <WhyItemComponent
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Right: Certifications box */}
          <div className="gradient-primary rounded-2xl md:rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2">
              Registered & trusted
            </h3>
            <p className="text-sm md:text-base opacity-75 mb-8">
              Jophrey Cleaning Services is a formally registered Nova Scotia
              business — giving you full peace of mind.
            </p>

            {/* Certification list */}
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


/**
 * ============================================
 * components/WhyUs/WhyItem.tsx
 * ============================================
 * 
 * Individual "Why Us" feature item
 * 
 * LAYOUT:
 * - Icon in circle
 * - Title + description
 * 
 * ============================================
 */

interface WhyItemProps {
  icon: string;
  title: string;
  description: string;
}

export function WhyItem({ icon, title, description }: WhyItemProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      {/* Icon circle */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-pale flex items-center justify-center text-2xl">
        {icon}
      </div>

      {/* Text */}
      <div>
        <h4 className="font-semibold text-lg md:text-xl text-purple mb-2">
          {title}
        </h4>
        <p className="text-sm md:text-base text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}


/**
 * ============================================
 * components/Owner/OwnerSection.tsx
 * ============================================
 * 
 * "Meet the Owner" section with image + bio
 * 
 * FEATURES:
 * - Large image on left
 * - Bio text on right
 * - Prominent quote
 * - Gradient background box
 * 
 * ============================================
 */

import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";

export default function OwnerSection() {
  return (
    <section id="owner" className="py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section header */}
        <SectionHeader
          label="Meet The Owner"
          title="Irene — Your Trusted Cleaning Professional"
        />

        {/* Owner container */}
        <div className="gradient-subtle rounded-3xl border-2 border-pink-pale p-8 md:p-12 lg:p-16 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/image3.jpg"
                  alt="Irene Aliguyon, Owner & Founder of Jophrey Cleaning Services"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>

            {/* Content */}
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

              {/* Quote */}
              <div className="bg-pink-pale rounded-xl border-l-4 border-pink p-6 md:p-8">
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


/**
 * ============================================
 * components/Areas/AreasSection.tsx
 * ============================================
 * 
 * Service areas section with area pills
 * 
 * FEATURES:
 * - Uses dynamic data from areas.ts
 * - Main areas (Halifax, Bedford, etc.) highlighted in pink
 * - Secondary areas with subtle styling
 * - Responsive flex wrapping
 * 
 * ============================================
 */

import { SectionHeader } from "../ui/SectionHeader";
import { AreaPill } from "./AreaPill";
import { serviceAreas } from "@/data/areas";

export default function AreasSection() {
  return (
    <section id="areas" className="bg-cream py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section header */}
        <SectionHeader
          label="Service Areas"
          title="We come to you."
          subtitle="Based in Halifax, we serve a wide area across HRM and surrounding communities. Not sure if we cover your area? Just ask!"
        />

        {/* Area pills grid */}
        <div className="flex flex-wrap gap-3 mt-12">
          {serviceAreas.map((area) => (
            <AreaPill
              key={area.id}
              name={area.name}
              isMain={area.isMain}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


/**
 * ============================================
 * components/Areas/AreaPill.tsx
 * ============================================
 * 
 * Individual area pill badge
 * 
 * PROPS:
 * - name: Area name
 * - isMain: Boolean (main areas highlighted)
 * 
 * ============================================
 */

interface AreaPillProps {
  name: string;
  isMain?: boolean;
}

export function AreaPill({ name, isMain = false }: AreaPillProps) {
  return (
    <div
      className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all cursor-default
        ${
          isMain
            ? "bg-pink text-white border-2 border-pink"
            : "bg-white text-text border-2 border-border hover:bg-pink-pale hover:border-pink-mid hover:text-purple"
        }
      `}
    >
      {name}
    </div>
  );
}
