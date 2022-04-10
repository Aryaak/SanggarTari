module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FA0030',
        dark: '#090705',
        "dark-08": 'rgba(0, 0, 0, 1)'
      },
      boxShadow: {
        "inner-main": "inset 100px -300px 10000px rgba(0, 0, 0, 0.8); "
      },
      letterSpacing: {
        long: '0.3em'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [

  ],
}
