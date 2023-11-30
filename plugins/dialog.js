const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  ({ addComponents, matchComponents, theme }) => {
    addComponents({
      '.dialog': {
        color: theme('colors.white.DEFAULT'),
        backgroundColor: theme('colors.black.DEFAULT'),
      },
    })

    matchComponents(
      {
        dialog: (size) => {
          return { width: size }
        },
      },

      {
        values: theme('dialogSize'),
      }
    )
  },

  {
    theme: {
      dialogSize: {
        xs: 'var(--xs)',
        sm: 'var(--sm)',
        md: 'var(--md)',
        lg: 'var(--lg)',
        xl: 'var(--xl)',
      },
    },
  }
)
