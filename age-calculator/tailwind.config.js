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
        off_white: "hsl(0, 0%, 94%)",
      },

      fontFamily: {
        body: ['"Poppins"', "sans-serif"],
      },

      fontWeight: {
        normal: "400",
        bold: "700",
        extra_bold: "800",
      },

      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
