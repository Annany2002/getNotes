/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'myPurple': '#8a00d4',
      'myDarkPink': '#d527b7',
      'myLightPink': '#f782c2',
      'myWhite': '#e3e3e3',
      'myYellow': '#f9c46b',
    },
    extend: {},
  },
  plugins: [],
}