module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        60: '60',
        100: '100'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        roboto: ['Roboto']
      },
      colors: {
        newblue: '#3C43FF'
      },
      inset: {
        '2/5': '40%',
        '3/8': '37.5%',
        '1/8': '12.5%',
        11: '11%',
        33: '33%'
      },
      width: {
        26: '6.5rem',
        '5/7': '71.4285714%'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: []
}
