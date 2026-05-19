/**
 * ============================================
 * data/services.ts
 * ============================================
 * 
 * This file contains all service offerings.
 * Each service is used to dynamically render ServiceCard components.
 * This separation makes it easy to add/edit services without changing code.
 * 
 * LOCATION: jophrey-cleaning/data/services.ts
 * PURPOSE: Define service data for dynamic rendering
 * 
 * ============================================
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export const services: Service[] = [
  {
    id: "residential",
    icon: "🏡",
    title: "Residential Cleaning",
    description:
      "Regular home cleaning tailored to your schedule. Weekly, bi-weekly, or monthly — whatever works for your family.",
  },
  {
    id: "condo",
    icon: "🏢",
    title: "Condo Cleaning",
    description:
      "Compact or full-floor condos, we know how to maximize every corner and leave your space feeling truly fresh.",
  },
  {
    id: "move-in-out",
    icon: "📦",
    title: "Move-In / Move-Out",
    description:
      "Transitioning homes? We deep clean your space so you start fresh — or leave on a great note for the next tenant.",
  },
  {
    id: "deep-clean",
    icon: "🔍",
    title: "Deep Cleaning",
    description:
      "Baseboards, appliances, inside cabinets — for when you want every inch of the home truly and thoroughly clean.",
  },
  {
    id: "commercial",
    icon: "🏗️",
    title: "Office & Commercial",
    description:
      "A clean workspace is a productive one. Ask us about cleaning solutions for your small business or office space.",
  },
  {
    id: "custom",
    icon: "✨",
    title: "Not sure what you need?",
    description:
      "Reach out and we'll figure it out together. Every home is different — we'll build a plan that fits perfectly.",
    isHighlighted: true, // Special styling for this card
  },
];
