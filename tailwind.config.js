/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#2DAB01",
        Secondary: "#9CD788",
      },
      fontFamily: {
        RBlack: ["Righteous-regular", "sans-serif"],
        JFS: ["JosefinSans-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
