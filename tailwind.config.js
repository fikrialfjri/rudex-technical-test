/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF2FE",
          300: "#5046E5",
        },
        danger: {
          300: "#F54040",
          50: "#F6D8D6",
        },
        success: {
          300: "#1B9F60",
          50: "#C5E9D7",
        },
      },
    },
  },
  plugins: [],
};
