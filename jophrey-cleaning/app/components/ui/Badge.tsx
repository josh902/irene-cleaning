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
