/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } ,
    extend: {
      height: {
        'full-page': '100vh',
        'login-page': '90vh',
      } ,

      width: {
        'full-screen': '100%',
         
      } ,

      colors: {
        'button-color': '#0063e5',
      }

    },
  },
  plugins: [],
}
