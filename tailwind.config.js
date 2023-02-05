/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#264373",
      },
      screens: {
        sm: "567px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "884px",
      },
    },
  },
  plugins: [],
};
