/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  darkMode: ['selector', '[data-mode="dark"]'],
}

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
}
