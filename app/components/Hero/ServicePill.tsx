interface ServicePillProps {
  icon: string;
  label: string;
  sub: string;
}

export function ServicePill({ icon, label, sub }: ServicePillProps) {
  return (
    <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-cream border border-border">
      <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-pink-pale flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <p className="font-medium text-sm md:text-base text-text">{label}</p>
        <p className="text-xs text-text-muted">{sub}</p>
      </div>
    </div>
  );
}
