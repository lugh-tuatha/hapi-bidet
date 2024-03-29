/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fefefe",
        secondary: "#cdb4db",
        tertiary: "#bde0fe",
        shrek: "#cde23d",
        bodybg: "#f7f7f7",
        background: {
          100: "#ffd3e2",
          200: "#dbf6fd",
          300: "#c8f7dc",
          400: "#d0f4dc",
          500: "#ffd3e2",
        },
      },
    },
  },
  plugins: [],
};