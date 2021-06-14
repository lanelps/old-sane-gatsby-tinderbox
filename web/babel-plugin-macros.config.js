// babel-plugin-macros.config.js
module.exports = {
  twin: {
    config: `tailwind.config.js`,
    preset: `emotion`,
    dataTwProp: true,
    debugPlugins: false,
    debug: false
  }
}