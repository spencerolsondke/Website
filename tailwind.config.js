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
        },
        teal: {
          DEFAULT: '#8fbcbb'
        }
      },
//------------------------------------
      minWidth: {
        '10': '10rem',
      },
//------------------------------------
      spacing: {
        '1/8': '12.5%'
      },
//------------------------------------
      keyframes: {
        wiggle: {
          '50%': { transform: 'rotate(-1deg)' },
          '25%, 75%': { transform: 'rotate(1deg)' },
          '0%, 100%': { transform: 'rotate(0deg)' }
        }
      },
//------------------------------------
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      transform: ['hover'],
    },
  },
  plugins: [],
}
