import { Icon } from "../ui/Icon";

interface AreaPillProps {
  name: string;
  isMain?: boolean;
}

export function AreaPill({ name, isMain = false }: AreaPillProps) {
  return (
    <div
      className={`flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-200 cursor-pointer hover:-translate-y-0.5
        ${
          isMain
            ? "bg-pink-pale text-purple border-2 border-pink-mid font-semibold hover:shadow-md hover:border-pink"
            : "bg-white text-text-muted border-2 border-border hover:bg-pink-pale hover:border-pink-mid hover:text-purple hover:shadow-sm"
        }
      `}
    >
      {isMain && (
        <Icon name="pin" className="w-3.5 h-3.5 mr-1.5 shrink-0 text-pink" strokeWidth={2} aria-hidden="true" />
      )}
      {name}
    </div>
  );
}
