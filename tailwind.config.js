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
              color: 'var(--dark)',
              fontWeight: '400',
              fontStyle: 'normal'
            },
            h3: {
              color: 'var(--dark)',
              fontWeight: '400',
              fontStyle: 'normal'
            },
            h4: {
              color: 'var(--dark)',
              fontWeight: '400',
              fontStyle: 'normal'
            },
            h5: {
              color: 'var(--dark)',
              fontWeight: '400',
              fontStyle: 'normal'
            },
            p: {
              color: 'var(--dark)',
              fontWeight: '100',
              fontStyle: 'normal'
            }
          },
        },
      })
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
