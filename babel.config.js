module.exports = function (api) {
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ]
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
    ],
    [
      'inline-import-data-uri',
      {
        extensions: ['.png', '.jpg']
      }
    ]
  ]

  api.cache(false)

  return {
    presets,
    plugins
  }
}
