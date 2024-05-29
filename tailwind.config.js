/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors:{
        'back': '#0F1624'
      },
      backgroundImage:{
        'bg-gradient': 'linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)',

      },

      boxShadow:{
        'neon-button': '0px 10px 30px 0px #00B2FF59'
      },
    },
  },
  plugins: [],
}

