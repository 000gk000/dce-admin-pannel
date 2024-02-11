/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        customGray:'#F7F7F7',
        textBlack: '#383838',
        vectorColor: '#737373',
        selectedColor:'#AB25B7',
        selectedContainer:'#F5F0FB',
        textBlue:'#1948EF'
      },
      boxShadow:{
        'csm': '1px 2px 3px 2px rgba(201, 201,, 201, 0.47);'
      }
    },

  },
  plugins: [],
}

