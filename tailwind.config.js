/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      height: {
        'md-height': '70%',
      },
      width: {
        'lg-width': '70%',
        'md-sidebar-width': '45%',
        'lg-sidebar-width': '35%'
      }
    },
  },
  plugins: [],
}
