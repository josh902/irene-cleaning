import { Icon } from "../ui/Icon";

interface ContactWayProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  isAddress?: boolean;
}

export function ContactWay({
  icon,
  label,
  value,
  href,
  external = false,
  isAddress = false,
}: ContactWayProps) {
  const content = (
    <div className="flex items-center gap-4 min-w-0 w-full">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/15 text-white flex items-center justify-center">
        <Icon name={icon} className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-white/50 uppercase tracking-wide font-medium">
          {label}
        </p>
        <p className="text-sm sm:text-base text-white font-medium break-words">
          {value}
        </p>
      </div>
    </div>
  );

  if (isAddress) {
    return (
      <div className="flex items-center gap-4 bg-white/7 rounded-2xl p-4 sm:p-5 border border-white/12">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 bg-white/7 rounded-2xl p-4 sm:p-5 border border-white/12 transition-all hover:bg-white/13 active:scale-95"
    >
      {content}
    </a>
  );
}
