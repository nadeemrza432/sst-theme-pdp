/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme/**/*.liquid"],
  theme: {
    screens: {
      'lg': {'max': '1440px'},
      'md': {'max': '990px'},
      'sm': {'max': '750px'},
    },
  },
  plugins: [],
}

