module.exports = function(api) {
  const presets = ['@babel/preset-env', '@babel/preset-react']
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-object-assign'
  ]

  if (api.env('test')) {
    plugins.push('require-context-hook')
  }

  api.cache(false)

  return {
    presets,
    plugins
  }
}
