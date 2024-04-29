/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',
      },
      spacing: {
        '702': '702px'
      }
    },
  },
  plugins: [],
}
