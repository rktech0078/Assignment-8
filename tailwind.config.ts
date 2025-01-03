import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#FAB12F",
        primaryWhite: "#FEF3E2",
        primaryOrange: "#FA812F",
        primaryRed: "#FA4032",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
