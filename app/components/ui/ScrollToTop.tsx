"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current && y > 300);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 lg:hidden w-12 h-12 rounded-full bg-pink text-white shadow-lg flex items-center justify-center"
      style={
        visible
          ? { animation: "scroll-btn-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }
          : { opacity: 0, transform: "scale(0.5)", transition: "opacity 0.15s ease-out, transform 0.15s ease-out", pointerEvents: "none" }
      }
    >
      <ChevronUp className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
