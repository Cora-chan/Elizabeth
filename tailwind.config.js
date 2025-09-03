module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid'
  ],
 theme: {
  extend: {
    fontFamily: {
      roboto: ['roboto', 'Roboto'],
      story:['story script','Story Script']
    },
    colors:{
      leather: {
          50:  '#faf7f4',
          100: '#f3ece5',
          200: '#e4d0b8',
          300: '#d4b38a',
          400: '#c5965d',
          500: '#967859', // main leather tone
          600: '#865c30',
          700: '#634423',
          800: '#412c16',
          900: '#1f1409',
        },
    }
  },
},
  plugins: [],
}
