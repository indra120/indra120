/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
    container: {
      center: true,
      padding: '16px',
    },
  },
  plugins: [],
}
