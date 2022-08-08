/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "960px",
      desktop: "1280px",
    },
    container: {
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "950px",
      },
    },
  },
  plugins: [],
};
