interface AreaPillProps {
  name: string;
  isMain?: boolean;
}

export function AreaPill({ name, isMain = false }: AreaPillProps) {
  return (
    <div
      className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm md:text-base transition-all cursor-default
        ${
          isMain
            ? "bg-pink-pale text-purple border-2 border-pink-mid font-semibold"
            : "bg-white text-text-muted border-2 border-border hover:bg-pink-pale hover:border-pink-mid hover:text-purple"
        }
      `}
    >
      {name}
    </div>
  );
}
