import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sea: {
          950: "#06192B",
          900: "#0A2540",
          800: "#0F3355",
          700: "#16466F",
          600: "#1E5C8F",
          500: "#2A76B3",
        },
        sand: {
          50: "#FBF8F2",
          100: "#F5EFE3",
          200: "#EADFC9",
          300: "#D9C7A4",
          400: "#BFA57A",
        },
        terracotta: {
          DEFAULT: "#C8553D",
          light: "#DB7A60",
          dark: "#A8432E",
        },
        stone: {
          500: "#6B6A66",
          600: "#4F4E4A",
          700: "#363532",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#0E7A43", // for buttons with white text (meets WCAG AA contrast)
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
