// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // App directory
    "./pages/**/*.{js,ts,jsx,tsx}", // If using pages dir
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#000000",
        secondary: "#f2f2f2",
      },
    },
  },
  darkMode: "class", // or 'media'
  plugins: [],
};

export default config;
