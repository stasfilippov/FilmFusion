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
        576: '576px',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      flex: {
        content: '1 1 auto',
      },
    },
  },
  plugins: [],
}
