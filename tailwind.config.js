/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      boxShadow: {
        "mobileFirstDefault": "0px 7px 0px 0px",
      },
      fontSize: {
        "customIcon": "2rem"
      },
      animation: {
        "spin-slow": "spin 2s linear infinite"
      }
    },
  },
  plugins: [],
}

