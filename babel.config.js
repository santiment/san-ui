module.exports = function (api) {
  const presets = ['@babel/preset-env', '@babel/preset-react']
  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-react-constant-elements',
    [
      'babel-plugin-transform-react-remove-prop-types',
      {
        mode: 'unsafe-wrap'
      }
    ]
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
