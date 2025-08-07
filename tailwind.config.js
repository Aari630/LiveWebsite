/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 Add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#18181b", // background
          800: "#27272a", // card
          700: "#3f3f46", // border
          600: "#52525b", // muted text
          500: "#a1a1aa", // text
          accent: "#fbbf24", // amber accent
        },
      },
    },
    screens: {
      "3xl": "1920px", // Ultra-large screens (4K/5K)
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
