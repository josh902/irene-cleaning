import {
  Home,
  Building2,
  Package,
  Search,
  Briefcase,
  Sparkles,
  Handshake,
  SprayCan,
  CalendarCheck,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  type LucideIcon,
} from "lucide-react";

function Facebook({
  className,
  strokeWidth = 1.75,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

type IconComponent = LucideIcon | typeof Facebook;

const iconMap: Record<string, IconComponent> = {
  home: Home,
  building: Building2,
  package: Package,
  search: Search,
  briefcase: Briefcase,
  sparkles: Sparkles,
  handshake: Handshake,
  spray: SprayCan,
  calendar: CalendarCheck,
  pin: MapPin,
  phone: Phone,
  mail: Mail,
  facebook: Facebook,
  shield: ShieldCheck,
  clock: Clock,
};

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className = "w-6 h-6", strokeWidth = 1.75 }: IconProps) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component className={className} strokeWidth={strokeWidth} />;
}
