module.exports = {
  content: [
    './src/**/*.{html,njk,js}',
    './src/index.html',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      screens: {
        'xs': '440px'
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
