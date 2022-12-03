/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer1': "url('/img/footer/footer1.png')",
        'footer2': "url('/img//footer/footer2.png')",
      }
    },
  },
  plugins: [],
}
