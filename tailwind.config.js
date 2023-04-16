/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {

    extend: {
    colors: {
      primary: "#FFCAC8",
      secondary: "#cdb4db",
      tertiary: "#bde0fe",

      background: {
        100: "#ffd3e2",
        200: "#dbf6fd",
      }
    },
    },
  },
  plugins: [],
};