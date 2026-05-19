/**
 * ============================================
 * data/whyUs.ts
 * ============================================
 * 
 * Data for "Why Choose Us" section.
 * Contains features that differentiate Jophrey from competitors.
 * 
 * LOCATION: jophrey-cleaning/data/whyUs.ts
 * PURPOSE: Define why-us features for dynamic rendering
 * 
 * ============================================
 */

export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const whyUs: WhyItem[] = [
  {
    id: "friendly",
    icon: "🤝",
    title: "Friendly & professional",
    description:
      "We treat every home with care and respect — and we're always a pleasure to work with.",
  },
  {
    id: "supplies",
    icon: "🧴",
    title: "We bring everything",
    description:
      "No need to stock up on supplies. We arrive fully equipped with everything needed.",
  },
  {
    id: "scheduling",
    icon: "📅",
    title: "Flexible scheduling",
    description:
      "Life is busy — we work around your schedule, not the other way around.",
  },
  {
    id: "local",
    icon: "📍",
    title: "Proudly local",
    description:
      "We're part of the Halifax community. Supporting us means supporting a local family business.",
  },
];

// Registrations/certifications
export const certifications = [
  "Certificate of Registration",
  "Partnership Registration",
  "Business Names Registration Act",
  "Registered since 2022",
];
