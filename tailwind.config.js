/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "#FFFF",
        deleteButton: "#FFA5A5",
        lightGray: "rgba(255, 255, 255, 0.05)"
      },
      fontSize: {
        'title': '56px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

