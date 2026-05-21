interface AreaPillProps {
  name: string;
  isMain?: boolean;
}

export function AreaPill({ name, isMain = false }: AreaPillProps) {
  return (
    <div
      className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all cursor-default
        ${
          isMain
            ? "bg-pink text-white border-2 border-pink"
            : "bg-white text-text border-2 border-border hover:bg-pink-pale hover:border-pink-mid hover:text-purple"
        }
      `}
    >
      {name}
    </div>
  );
}
