import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        ink: "#04060B",
        navy: {
          950: "#070A13",
          900: "#0B0F1C",
          800: "#101526",
          700: "#161C33",
          600: "#212944",
        },
        electric: {
          DEFAULT: "#3660F2",
          light: "#6E90FF",
          dark: "#274ACB",
          glow: "#5C7FFF",
        },
        fog: {
          100: "#F6F7F9",
          200: "#E7E9EF",
          300: "#C7CCD8",
          400: "#9BA3B5",
          500: "#78829A",
          600: "#565F76",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.24em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(4,6,11,1) 85%)",
        "glow-radial":
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 0%), rgba(61,107,255,0.15), transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
