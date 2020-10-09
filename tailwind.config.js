const defaultTheme = require('tailwindcss/defaultTheme')

// FIXME!!
// Currently we don't purge unused styles related to typography!!
// We would have to compile markdown BEFORE purging so purge knows which elements exist.
// See how to do it here:
// https://github.com/tailwindlabs/tailwindcss-typography#purging-unused-styles

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
      },
    },
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
