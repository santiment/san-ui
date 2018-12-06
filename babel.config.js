module.exports = function (api) {
  const presets = ['@babel/preset-env', '@babel/preset-react']
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-object-assign'
  ]
  api.cache(false)

  return {
    presets,
    plugins
  }
}
