/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: '#979999',
        darkgray: '#0A0A0A',
        secondary: '#4C4D4D',
      },
    },
  },
  plugins: [],
}
