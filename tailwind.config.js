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

