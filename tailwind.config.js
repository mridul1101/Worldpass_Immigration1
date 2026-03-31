/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#2563EB",
        accent: "#10B981",
        dark: "#111827",
        muted: "#F3F4F6",
        border: "#E5E7EB",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(37, 99, 235, 0.1)",
        darkNavy: "#1E293B",
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
