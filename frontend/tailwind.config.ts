import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          500: "#1e3a8a",
          900: "#0f172a",
        },
        primary: {
          50: "#ecfdf5",
          500: "#10b981", // سبز
          600: "#059669",
          700: "#047857",
        },
        accent: {
          500: "#f97316", // گرم (نارنجی)
          600: "#ea580c",
        }
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;