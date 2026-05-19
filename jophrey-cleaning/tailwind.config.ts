import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6a1040",
        "purple-dark": "#4a0a2e",
        pink: "#c2185b",
        "pink-light": "#e91e8c",
        "pink-pale": "#fce4ec",
        "pink-mid": "#f48fb1",
        cream: "#fdf8fb",
        text: "#2a0a1a",
        "text-muted": "#7a4060",
        border: "#e8c8d8",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "17px",
        xl: "18px",
        "2xl": "19px",
        "3xl": "22px",
        "4xl": "26px",
        "5xl": "40px",
        "6xl": "54px",
      },
      spacing: {
        "0": "0",
        "2": "8px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      borderRadius: {
        none: "0",
        "2xs": "8px",
        xs: "10px",
        sm: "12px",
        base: "16px",
        md: "20px",
        lg: "24px",
        xl: "28px",
        "2xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(194, 24, 91, 0.08)",
        base: "0 4px 32px rgba(194, 24, 91, 0.1)",
        md: "0 8px 48px rgba(194, 24, 91, 0.1)",
        lg: "0 12px 60px rgba(194, 24, 91, 0.15)",
      },
      letterSpacing: {
        tight: "-0.3px",
        normal: "0px",
        wide: "2px",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.2",
        normal: "1.6",
        relaxed: "1.7",
        loose: "1.8",
      },
    },
  },
  plugins: [],
};

export default config;
