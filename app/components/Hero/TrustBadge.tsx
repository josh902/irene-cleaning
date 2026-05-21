interface TrustBadgeProps {
  text: string;
}

export function TrustBadge({ text }: TrustBadgeProps) {
  return (
    <span className="inline-block bg-pink-pale text-purple px-3 py-1 rounded-full text-xs font-medium border border-pink-mid">
      {text}
    </span>
  );
}
