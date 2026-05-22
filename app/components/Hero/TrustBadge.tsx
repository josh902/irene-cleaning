import { Check } from "lucide-react";

interface TrustBadgeProps {
  text: string;
}

export function TrustBadge({ text }: TrustBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-pink-pale text-purple px-3 py-1 rounded-full text-xs font-medium border border-pink-mid">
      <Check className="w-3.5 h-3.5 text-pink" strokeWidth={2.5} aria-hidden="true" />
      {text}
    </span>
  );
}
