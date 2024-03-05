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
      spacing: {
        120: "26.25rem",
      },

      boxShadow: {
        neon: "0 0 5px hsl(150, 100%, 66%), 0 0 10px hsl(150, 100%, 66%), 0 0 20px hsl(150, 100%, 66%), 0 0 50px",
      },

      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
