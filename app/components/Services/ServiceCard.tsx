import { Icon } from "../ui/Icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export function ServiceCard({
  icon,
  title,
  description,
  isHighlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default
        ${
          isHighlighted
            ? "bg-pink-pale border-pink-mid"
            : "bg-cream border-border hover:bg-white"
        }
      `}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-pink-pale text-pink flex items-center justify-center mb-5">
        <Icon name={icon} className="w-6 h-6 md:w-7 md:h-7" />
      </div>
      <h3 className="font-playfair text-xl md:text-2xl font-semibold text-purple mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
