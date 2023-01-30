/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens:{
      sm: '374px',
      md: '767px',
      lg: '991px',
      xl: '1200px',
    },
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '24px'],
    //   xl: ['24px', '28px'],
    // },
    extend: {
      colors:{
        goldBrown: '#D5966C',
        ash: '#444',
        pewterBlack: '#151515'
      },
      font: {
        'outfit': ['Outfit-Light','sans-serif'],
        'shoulder': ['Shoulder-Regular' ,'cursive']
      }
    },
  },
  plugins: [],
}
