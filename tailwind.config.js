const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: [
      './src/**/*.njk',
      './utils/**/*.js'
    ],
    options: {
      whitelist: ['data-top', 'false', 'snipcart-cart--opened']
    }
  },
  theme: {
    extend: {
      inset: {
        50: '50%'
      }
    }
  },
  variants: {

  },
  plugins: [
    plugin(function ({
      addVariant,
      e
    }) {
      addVariant('scrolled', ({
        modifySelectors,
        separator
      }) => {
        modifySelectors(({
          className
        }) => {
          return `html[data-top='false'] .${e(`scrolled${separator}${className}`)}`
        })
      })
    })
  ]
}
