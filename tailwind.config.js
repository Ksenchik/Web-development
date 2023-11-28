/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2 rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1000px',
        xl: '1440px',
        '2xl': '1647px',
      },
      colors: {
        "brand-blue": "#5C62EE",
        "brand-red": "#E04E4E",
        "brand-black": "#151515",
        "brand-grey": "#F5F5F5",
        "backgr": "#F9F9FB",
      },
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

