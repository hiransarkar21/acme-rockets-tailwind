/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/index.html"],
  theme: {
    extend: {
      colors: {
        'light-grey': 'rgb(180, 180, 180)'
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
    },
  },
  plugins: [],
}

