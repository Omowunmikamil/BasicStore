/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saleBg: "#FFEBD2",
        orange: "#F4890A",
        bestBg: "#F6F6F6",
        bestBorder: "#E8E8E8",
        tesBorder: "#f2f2f2",
      },

      backgroundImage: {
        hero1: "url('./src/assets/hero1.png')",
        hero2: "url('./src/assets/hero2.png')",
        hero3: "url('./src/assets/hero3.png')",
        headerImg: "url('./src/assets/page-header-bg.png')",
        subcribeImg: "url('./src/assets/subscribe-bg.png')",
      },
    },
  },
  plugins: [],
};
