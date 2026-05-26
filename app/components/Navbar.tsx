"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#areas", label: "Areas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="relative overflow-hidden flex-shrink-0 w-[96px] h-[72px]">
            <Image
              src="/images/logo3.png"
              alt="Jophrey Cleaning Services"
              fill
              sizes="96px"
              className="object-cover object-top mix-blend-multiply"
              priority
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-border/70 mx-0.5" />
          <div className="flex flex-col leading-none gap-1">
            <span className="font-playfair text-lg md:text-xl font-semibold tracking-tight">
              <span className="text-purple">Jophrey</span>{" "}
              <span className="text-pink italic">Cleaning</span>
            </span>
            <span className="hidden sm:block text-[11px] uppercase tracking-[0.22em] text-text-muted font-medium">
              Services
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-text-muted font-medium hover:text-pink transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-pink after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
            >
              {link.label}
            </a>
          ))}

          <a href="#contact" className="btn-primary text-xs md:text-sm">
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-pink w-10 h-10 flex items-center justify-center rounded-lg hover:bg-pink-pale transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-border ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-text font-medium py-3 px-3 rounded-lg hover:bg-pink-pale hover:text-pink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full text-sm"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
