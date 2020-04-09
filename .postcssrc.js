module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 13,
      viewportUnit: 'vw',
      selectorBlackList: ['.usepixel'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "autoprefixer": require('autoprefixer')
  }
}