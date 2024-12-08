/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saleBg: "#FFEBD2",
        peg: "#F4890A4D",
        orange: "#F4890A",
        bestBg: "#F6F6F6",
        bestBorder: "#E8E8E8",
        tesBorder: "#f2f2f2",
        text: "#272727",
      },

      backgroundImage: {
        headerImg: "url('./src/assets/page-header-bg.png')",
        subcribeImg: "url('./src/assets/subscribe-bg.png')",
      },
    },
  },
  plugins: [],
};
