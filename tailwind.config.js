/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Barlow - clean, modern, industrial feel for body text
        sans: ['Barlow', 'ui-sans-serif', 'system-ui'],
        // Barlow Condensed - bold, strong, impactful for headings
        heading: ['Barlow Condensed', 'ui-sans-serif', 'system-ui'],
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
