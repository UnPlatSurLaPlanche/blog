const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary-light': '#FDF3EF',
        primary: '#F0A07C',
        secondary: '#4A274F',
        tertiary: '#B76642',
        gray: colors.blueGray,
      },
      opacity: {
        10: '0.10',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
