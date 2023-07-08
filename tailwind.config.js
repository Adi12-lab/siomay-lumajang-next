/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "15px",
          md: "90px",
          lg: "120px",
        },
      },
      colors: {
        black: "#0C0F2E",
        primary: "#FE771C",
        gray: "#5A5B67",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "cursive"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        base: "15px",
        xl: "44.8px",
        "2xl": "76.8px",
      },
    },
  },
  plugins: [],
};
