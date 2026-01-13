/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lpurple: "#DCCCFF",
        while: "#FFFFFF",
        wpurple: "#F2EBFF",
        laven: "#C7AEFD",
        black: "#000000",
        gray: "#6B7280",
        lightgray: "#9CA3AF",
        darkgray: "#4B5563",
        blue: "#3B82F6",
        lightblue: "#60A5FA",
        pink: "#EC4899",
        lightpink: "#F472B6",
        orange: "#F97316",
        lightorange: "#FB923C",
      },
      fontFamily: {
        helvetica: ["Helvetica", "system-ui", "Arial", "sans-serif"],
        boldbloom: ["Bold-Bloom", "sans-serif"],
        jersey: ["Jersey-10", "sans-serif"],
      },
    },
  },
  plugins: [],
}