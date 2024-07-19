/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    screens: {},
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
      fontSize: {
        header: [
          '13px',
          {
            lineHeight: '22px',
            letterSpacing: '0.5px',
            fontWeight: '700',
          },
        ],
        skilletLabel: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        headerTop: '#F0EEDD',
        button: '#D37657',
        background: '#F5F1E9',
        backgroundLight: '#FCFAF6',
        bgFooter: '#6C674D',
        card: '#F7F3EB',
        dark: '#35312E',
        light: '#6E6259',
        textFooter: '#F5F1E9',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
