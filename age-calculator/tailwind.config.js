/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(0, 0%, 8%)",
        primary: "hsl(259, 100%, 65%)",
        secondary: "hsl(0, 100%, 67%)",
        accent: "hsl(0, 1%, 44%)",
        background: "hsl(0, 0%, 86%)",
        offwhite: "hsl(0, 0%, 94%)",
      },

      fontFamily: {
        body: ["Poppins-Regular", "sans-serif"],
        extrabolditalic: ["Poppins-ExtraBoldItalic", "sans-serif"],
        bold: ["Poppins-Bold", "sans-serif"],
        extrabold: ["Poppins-ExtraBold", "sans-serif"],
        bolditalic: ["Poppins-BoldItalic", "sans-serif"],
        italic: ["Poppins-Italic", "sans-serif"],
      },

      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
