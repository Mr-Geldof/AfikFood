/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#06bd",
        secondary: {
          100: '#9333ea',
          200: '#2563eb'
        }
      },
      fontSize:{
        pro: '10rem'
      },
      fontFamily:{
        nunito:'Nunito'
      }
    },
  },
  plugins: [],
}
