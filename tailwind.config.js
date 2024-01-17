/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        backglass:
          "linear-gradient(to bottom, #eee5, #000f), url('/repairs/cracked-back.jpg')",
        frontglass:
          "linear-gradient(to bottom, #eee5, #000f), url('/repairs/cracked-front.jpg')",
        ram: "linear-gradient(to bottom, #eee5, #000f), url('/repairs/ram.jpg')",
      },
      screens: {
        "2xs": "340px",
        xs: "426px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "current-color",
      gray: colors.gray,
      red: colors.red,
      green: {
        100: "#daffdb",
        200: "#b5ffb7",
        300: "#91ff92",
        400: "#6cff6e",
        500: "#47ff4a",
        600: "#39cc3b",
        700: "#2b992c",
        800: "#1c661e",
        900: "#0e330f",
      },
      blue: {
        100: "#ccddff",
        200: "#99bbff",
        300: "#6699ff",
        400: "#3377ff",
        500: "#0055ff",
        600: "#0044cc",
        700: "#003399",
        800: "#002266",
        900: "#001133",
      },
    },
    animation: {
      orbit: "orbit 30s linear infinite",
      "orbit-reverse": "orbit-reverse 30s linear infinite",
    },
    keyframes: {
      orbit: {
        "100%": { rotate: "1turn" },
      },
      "orbit-reverse": {
        "100%": { rotate: "-1turn" },
      },
    },
  },
  plugins: [],
};

