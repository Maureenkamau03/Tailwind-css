/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        green: 'hsl(120, 100%, 50%)',
        black: '	hsl(0,0%,0%)',
        white: 'hsla(360, 100%, 100%, 1)',
        blue: ' hsla(209, 100%, 50%, 1)',
        lightgrey: 'hsla(0, 2%, 84%, 1)',

      },
    },
  },
  plugins: [],
}

