/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0B2447",
        secondary: "#19A7CE",
        accent: "#F5A623",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(25, 167, 206, 0.15)",
        darkNavy: "#071938",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};