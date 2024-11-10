import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: ["selector", '[data-mode="dark"]'],
      colors: {
        white: "rgb(255, 255, 255)",
        black: "#0a0a0a",

        "primary-dark": "var(--primary-dark)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",

        "gray-light": "var(--gray-light)",
        "gray-dark": "var(--gray-dark)",

        background: "var(--background)",
        foreground: "var(--foreground)",
        "gray-border": "var(--gray-border)",
        "gray-border-hover": "var(--gray-border-hover)",

        "gray-subtitle": "var(--gray-subtitle)",
        "gray-subtitle-hover": "var(--gray-subtitle-hover)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
        mono: ["var(--font-ubuntu)"],
      },

      animation: {
        scrolling: "scroll 20s linear infinite",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
