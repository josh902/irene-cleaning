/**
 * ============================================
 * components/ui/Button.tsx
 * ============================================
 * 
 * Reusable button component with variants
 * 
 * PROPS:
 * - variant: "primary" (pink bg) | "outline" (transparent)
 * - size: "sm" (small) | "md" (medium) | "lg" (large)
 * - children: button text
 * - className: additional Tailwind classes
 * 
 * USAGE:
 * <Button variant="primary">Get a free quote</Button>
 * <Button variant="outline" size="lg">Learn more</Button>
 * 
 * WHY COMPONENTS?
 * - Reusability: Same button style everywhere
 * - Consistency: Changes in one place affect all buttons
 * - Type safety: TypeScript catches errors
 * 
 * ============================================
 */

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  [key: string]: any;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}: ButtonProps) {
  // Base styles applied to all buttons
  const baseClasses =
    "inline-flex items-center justify-center font-dmsans font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95";

  // Size variants
  const sizeClasses = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  // Color variants
  const variantClasses = {
    primary:
      "bg-pink text-white border-2 border-pink hover:bg-purple hover:border-purple",
    outline:
      "bg-transparent text-pink border-2 border-pink hover:bg-pink-pale",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Render as link if href provided
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}


/**
 * ============================================
 * components/ui/Badge.tsx
 * ============================================
 * 
 * Badge component for labels and tags
 * 
 * PROPS:
 * - variant: "primary" | "secondary" | "outline"
 * - children: badge text
 * 
 * USAGE:
 * <Badge variant="primary">✓ Supplies included</Badge>
 * <Badge variant="secondary">Pink</Badge>
 * 
 * ============================================
 */

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";

  const variantClasses = {
    primary: "bg-pink-pale text-purple border border-pink-mid",
    secondary: "bg-pink-pale text-pink border border-pink",
    outline: "bg-transparent text-text border border-border",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}


/**
 * ============================================
 * components/ui/SectionHeader.tsx
 * ============================================
 * 
 * Reusable section header (label + title + subtitle)
 * Used at the beginning of each major section
 * 
 * PROPS:
 * - label: Small uppercase label (e.g., "Services")
 * - title: Main heading
 * - subtitle: Optional description
 * 
 * USAGE:
 * <SectionHeader
 *   label="Services"
 *   title="Every clean, done right."
 *   subtitle="From regular upkeep to deep cleans..."
 * />
 * 
 * ============================================
 */

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
