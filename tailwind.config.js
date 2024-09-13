/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg": "#FFFAF3",
        primaryColor: "#202020",
        secondaryColor: "#707070",
      },
      fontFamily: {
        abhaya: ["Abhaya Libre", "serif"],
      },
    },
  },
  plugins: [],
};
