const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floated: {
          "0%": { transform: 'translateY(0px)' },
          "50%": { transform: 'translateY(-5px)' },
          "25%, 75%": { transform: 'translateY(-2px)' },

        }
      }
    },
    animation: {
      floated: 'floated 1s ease-in-out infinite',
    }
  },
  plugins: [],
}

