export interface Area {
  id: string;
  name: string;
  isMain?: boolean;
}

export const serviceAreas: Area[] = [
  { id: "halifax", name: "Halifax", isMain: true },
  { id: "bedford", name: "Bedford", isMain: true },
  { id: "dartmouth", name: "Dartmouth", isMain: true },
  { id: "sackville", name: "Sackville", isMain: true },
  { id: "fall-river", name: "Fall River" },
  { id: "cole-harbour", name: "Cole Harbour" },
  { id: "timberlea", name: "Timberlea" },
  { id: "hammonds-plains", name: "Hammonds Plains" },
  { id: "eastern-passage", name: "Eastern Passage" },
  { id: "surrounding", name: "+ surrounding areas" },
];
