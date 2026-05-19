/**
 * ============================================
 * data/areas.ts
 * ============================================
 * 
 * Service area coverage.
 * Contains main areas (highlighted) and secondary areas.
 * Used to render AreaPill components dynamically.
 * 
 * LOCATION: jophrey-cleaning/data/areas.ts
 * PURPOSE: Define service coverage areas
 * 
 * ============================================
 */

export interface Area {
  id: string;
  name: string;
  isMain?: boolean; // Main areas get highlighted styling
}

export const serviceAreas: Area[] = [
  // Main service areas (highlighted)
  { id: "halifax", name: "Halifax", isMain: true },
  { id: "bedford", name: "Bedford", isMain: true },
  { id: "dartmouth", name: "Dartmouth", isMain: true },
  { id: "sackville", name: "Sackville", isMain: true },

  // Secondary areas
  { id: "fall-river", name: "Fall River" },
  { id: "cole-harbour", name: "Cole Harbour" },
  { id: "timberlea", name: "Timberlea" },
  { id: "hammonds-plains", name: "Hammonds Plains" },
  { id: "eastern-passage", name: "Eastern Passage" },
  { id: "surrounding", name: "+ surrounding areas" },
];
