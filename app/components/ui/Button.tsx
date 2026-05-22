interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-light";
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
  const baseClasses =
    "inline-flex items-center justify-center font-dmsans font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  const variantClasses = {
    primary:
      "bg-pink text-white border-2 border-pink hover:bg-purple hover:border-purple",
    outline:
      "bg-transparent text-pink border-2 border-pink hover:bg-pink-pale",
    "outline-light":
      "bg-white/10 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-purple",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
