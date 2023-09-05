/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#FFAB08',
        orange: '#FF7020'
      }
    }
  },
  plugins: []
}
