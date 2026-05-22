export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const whyUs: WhyItem[] = [
  {
    id: "friendly",
    icon: "handshake",
    title: "Friendly & professional",
    description:
      "We treat every home with care and respect — and we're always a pleasure to work with.",
  },
  {
    id: "supplies",
    icon: "spray",
    title: "We bring everything",
    description:
      "No need to stock up on supplies. We arrive fully equipped with everything needed.",
  },
  {
    id: "scheduling",
    icon: "calendar",
    title: "Flexible scheduling",
    description:
      "Life is busy — we work around your schedule, not the other way around.",
  },
  {
    id: "local",
    icon: "pin",
    title: "Proudly local",
    description:
      "We're part of the Halifax community. Supporting us means supporting a local family business.",
  },
];

export const certifications = [
  "Certificate of Registration",
  "Partnership Registration",
  "Business Names Registration Act",
  "Registered since 2022",
];
