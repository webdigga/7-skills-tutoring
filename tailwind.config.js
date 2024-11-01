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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              color: 'var(--dark)'
            },
            h3: {
              color: 'var(--dark)'
            },
            h4: {
              color: 'var(--dark)'
            },
            h5: {
              color: 'var(--dark)'
            },
            p: {
              color: 'var(--dark)',
            },
            strong: {
              color: 'var(--dark)'
            },
            blockquote: {
              color: 'var(--dark)',
              fontWeight: '400'
            }
          },
        },
      })
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
