import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#ffffff",
        ivory: "#f5f5f5",
        sand: "#E4B080",
        copper: {
          DEFAULT: "#C68E5D",
          light: "#D9A778",
          dark: "#A16E42",
        },
        bronze: {
          DEFAULT: "#8B5E3C",
          dark: "#5E3E28",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#555555",
          soft: "#888888",
        },
        line: "#e5e5e5",
        navy: {
          DEFAULT: "#0a1628",
          light: "#13233d",
          muted: "#3a4a5e",
        },
        gold: {
          DEFAULT: "#f2c744",
          muted: "#f2a624",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.1)",
        cardHover:
          "0 2px 4px rgba(0,0,0,0.06), 0 20px 40px -16px rgba(0,0,0,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
