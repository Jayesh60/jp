/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "btn-gradient":
          "linear-gradient(225.4deg, #FFCBA0 0%, #DD5789 48.12%, #9B5BE6 93.59%)",
      },
      colors: {
        whitesmoke: "#F1F0EE",
        shinywhite: "#F0F0F0",
        desc: "#000000B2",
        gray: "#00000090",
        blue: "#E0DAFF70",
        "dark-blue": "#6248ff",
      },
    },
  },
  plugins: [],
};
