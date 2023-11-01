/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
        'xxsm': '370px', 
        'xxxsm': '320px',
      },
      colors: {
        'lightblue': '#9FB0BF',
        'darkgray': '#727372',
        'lightgray': '#D9D9D9',
        'lightwhite': '#F2F2F0',
        'lightblack': '#0D0D0D',
      }
    },
  },
  plugins: [],
}