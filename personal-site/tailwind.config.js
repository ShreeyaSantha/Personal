/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        'custom': '80%',
      },
      colors: {
        lpurple: "#DCCCFF",
        white: "#FFFFFF",
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
        darkblue:"#0a1356",
      },
      fontFamily: {
        helvetica: ["Helvetica", "system-ui", "Arial", "sans-serif"],
        boldbloom: ["Bold-Bloom", "sans-serif"],
        jersey: ["Jersey-10", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-start infinite",
        translateY: "translateY 0.5s ease-in-out infinite alternate",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: 1 },
          "51%, 100%": { opacity: 0 },
        },
        translateY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}