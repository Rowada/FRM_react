/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(234, 29%, 20%)",
        primary: "hsl(4, 100%, 67%)",
        secondary: "hsl(0, 0%, 100%)",
        accent: "hsl(231, 7%, 60%)",
        background: "hsl(235, 18%, 26%)",
        hover: "#ff3e83",
      },
      fontFamily: {
        heading: ['"Roboto"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },

      borderRadius: {
        "5xl": "32px",
      },
    },
  },
  plugins: [],
};
