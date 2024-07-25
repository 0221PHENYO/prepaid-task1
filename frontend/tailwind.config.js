/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D4B9",
        dark: "#303030",
      }, 
      fontFamily: {
        inter: ["Inter", "san-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '3rem', /*This is basically handle responsiveness of the screen*/
          xl: '4rem'
        },
      },
    },
  },
  plugins: [],
}

