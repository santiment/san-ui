/*
   NOTE
   For successful transformation, all icon components filename should start with the 'Icon' and end with the '.js' extension.
   E.G.:
      Component "IconProfileRound.js" will be transformed into "profile-round"
*/

import React from 'react'
import PropTypes from 'prop-types'

if (process.NODE_ENV === 'test') {
  // Hack. IDK why, but without it jest can't mock 'require.content' and crashes
}

const context = require.context('./', false, /\.js$/)

export const icons = context
  .keys()
  .filter(iconKey => {
    return iconKey !== './Icon.js' && iconKey !== './index.js'
  })
  .reduce((acc, iconKey) => {
    const icon = iconKey
      .slice('./Icon'.length, -'.js'.length)
      .replace(/(\B[A-Z])/g, '-$1')
      .toLowerCase()

    acc[icon] = context(iconKey).default

    return acc
  }, {})

const Icon = ({ type, ...props }) => {
  if (process.NODE_ENV === 'development') {
    if (!type || icons[type]) {
      throw new Error('Unknow icon type -> ', type)
    }
  }
  const SelectedIcon = icons[type]
  return <SelectedIcon {...props} />
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired
}

export default Icon
