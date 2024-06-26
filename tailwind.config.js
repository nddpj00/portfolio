/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        league_spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
