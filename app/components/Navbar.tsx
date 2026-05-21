"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="font-playfair text-lg md:text-xl font-semibold text-purple">
            Jophrey{" "}
            <span className="text-pink italic">
              Cleaning
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-text-muted font-medium hover:text-pink transition-colors"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="text-sm text-text-muted font-medium hover:text-pink transition-colors"
          >
            Why Us
          </a>
          <a
            href="#areas"
            className="text-sm text-text-muted font-medium hover:text-pink transition-colors"
          >
            Areas
          </a>

          <a
            href="#contact"
            className="btn-primary text-xs md:text-sm"
          >
            Get a Quote
          </a>
        </div>

        <button className="md:hidden text-pink">
          ☰
        </button>
      </div>
    </nav>
  );
}
