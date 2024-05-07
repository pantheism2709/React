/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class", // when You want to inherit changes of dark and light from TOP most html tag then you have to enable dark mode property in tailwind config... there are two options one is class based second is media based .. class based is what we had done and media based is based on our system mode
  theme: {
    extend: {},
  },
  plugins: [],
}

