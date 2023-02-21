/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'mobile': {'min': '374px', 'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'laptop': {'min': '1024px'}  
    },
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'shoulder': ['Big Shoulders Display', 'cursive'],
        'header': ['Big Shoulders Display-Black', 'cursive']
      },
      colors:{
        goldBrown: '#D5966C',
        ash: '#444',
        pewterBlack: '#151515'
      },
    },
  },
  plugins: [
    plugin(function({addVariant,addUtilities}){
      addVariant("children", "&>*")
    })
  ]
}
