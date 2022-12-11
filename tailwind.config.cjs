/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        snowfall: "snowfall ease-in-out infinite",
      },
      keyframes: {
        snowfall: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(calc(100vh + 2em))",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".snow": {
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          "z-index": "100",
          display: "flex",
          "justify-content": "space-between",
          "pointer-events": "none",
        },
        ".snow__flake": {
          position: "relative",
          top: "-2em",
          color: "#ffffff",
          "will-change": "transform"
        },
      });
    }),
  ],
};
