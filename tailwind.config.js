const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [],
}
