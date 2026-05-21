interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="section-label">{label}</p>
      <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-purple mb-4">
        {title}
      </h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}
