module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#2e3440',
          DEFAULT: '#3b4252',
          light: '#4c566a',
        },
        white: {
          DEFAULT: '#eceff4',
          dark: '#d8dee9'
        },
        blue: {
          DEFAULT: '#81a1c1',
          dark: '#5e81ac',
          light: '#88c0d0',
        }
      },
      minWidth: {
        '10': '10rem',
      },
      spacing: {
        '1/8': '12.5%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
