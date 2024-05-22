/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Almost-White": "hsl(0, 0%, 98%)",
        "Almost-Transparent-White": "hsla(0, 0%, 98%, 0.336)",
        "Medium-Gray": "hsl(0, 0%, 41%)",
        "Almost-Black": "hsl(0, 0%, 8%)",
        "DarkBlue": "hsl(240, 50%, 19%)",
        "LightDarkBlue": "hsl(240, 50%, 58%)"
      }
    },
  },
  plugins: [],
}

