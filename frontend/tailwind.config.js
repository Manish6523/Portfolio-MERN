/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "serif"],
      roboto: ["Roboto", "serif"],
      Garamond: ["Cormorant Garamond", "serif"],
      Eagle: ["Eagle Lake", "serif"]
    }
  },
  plugins: [],
}