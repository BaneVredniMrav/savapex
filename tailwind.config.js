/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        brandOrange: '#f8951e', 
        brandRose: '#e94265'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
