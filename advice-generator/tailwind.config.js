/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(193, 38%, 86%)",
        primary: "hsl(150, 100%, 66%)",
        accent: "hsl(217, 19%, 38%)",
        background: "hsl(217, 19%, 24%)",
        darkblue: "hsl(218, 23%, 16%)",
      },

      fontFamily: {
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};