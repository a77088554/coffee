/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage:{
        'coffee':"url('/coffee/coffee_hero.jpg')",
      }
    },
  },
  plugins: [],
}

