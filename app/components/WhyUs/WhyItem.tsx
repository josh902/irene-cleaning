import { Icon } from "../ui/Icon";

interface WhyItemProps {
  icon: string;
  title: string;
  description: string;
}

export function WhyItem({ icon, title, description }: WhyItemProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-pale text-pink flex items-center justify-center">
        <Icon name={icon} className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-semibold text-lg md:text-xl text-purple mb-2">
          {title}
        </h4>
        <p className="text-sm md:text-base text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
