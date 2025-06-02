/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#46B633",
          900: "#212F3F",
          100: "#EDF8ED"
        },
        blue: { DEFAULT: "#608891" }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  }
};
