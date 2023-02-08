/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'buttonbg': 'rgba(255, 255, 255, 0.47);',
        'inputColor': '#D8D5D9',
        'fPassColor': 'rgba(228, 135, 251, 1)',
        'desktopBg': '#3E1149',
      }
    },
  },
  plugins: [],
}
