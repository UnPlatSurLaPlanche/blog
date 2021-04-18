module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-light': '#FDF3EF',
        primary: '#F0A07C',
        secondary: '#4A274F',
        tertiary: '#B76642',
        gray: {
          200: '#E7E2F0',
          400: '#9E94B8',
          500: '#75648B',
          800: '#251E3B',
          900: '#09050A',
        },
      },
      opacity: {
        10: '0.10',
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
