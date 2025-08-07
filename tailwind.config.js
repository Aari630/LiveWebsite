/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '3xl': '1920px', // Ultra-large screens (4K/5K)
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
