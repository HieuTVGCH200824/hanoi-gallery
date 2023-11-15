/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      backgroundImage: {
        "lang-bac": "url('src/landing/Locations/assets/lang-bac.png')",
        "thap-rua": "url('src/landing/Locations/assets/thap-rua.png')",
        "mot-cot": "url('src/landing/Locations/assets/mot-cot.png')",
      },
      animation: {
        typing: "typing 2.5s steps(30) infinite alternate",
      },
    },
    fontFamily: {
      modern: ["'Modern No. 20'", "sans-serif"],
      spartan: ["League Spartan", "sans-serif"],
      felix: ["'Felix Titling'", "sans-serif"],
      playfair: ["'Playfair Display'", "serif"],
      garamond: ["'Cormorant Garamond'", "serif"],
    },
  },
  plugins: [],
};
