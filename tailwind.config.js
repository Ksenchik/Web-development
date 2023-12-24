/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '20px',
        lg: '20px',
        xl: '64px',
        '2xl': '135px',
      },
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1000px',
        xl: '1440px',
        '2xl': '1920px',
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

