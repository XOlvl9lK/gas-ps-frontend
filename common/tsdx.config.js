const sass = require('rollup-plugin-sass')
const postcss = require('rollup-plugin-postcss')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        inject: true,
        extract: !!options.writeMeta,
        modules: true,
        camelCase: true,
        sass: true
      })
    )
    return config;
  }
}
