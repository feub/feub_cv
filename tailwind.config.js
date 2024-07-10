/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      colors: {
        "feub-primary": "#00668A",
        "feub-secondary": "#004E71",
        "feub-toned-down": "#93c2d6",
        "feub-primary-dark": "#282A37",
        "feub-secondary-dark": "#181A21",
      }
    },
  },
  plugins: [],
}

