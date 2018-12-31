import React from 'react'
import PropTypes from 'prop-types'
import IconHelpRound from './IconHelpRound'
import IconProfile from './IconProfile'
import IconProfileRound from './IconProfileRound'

const icons = {
  profile: IconProfile,
  'profile-round': IconProfileRound,
  'help-round': IconHelpRound
}

const Icon = ({ type, ...props }) => {
  const SelectedIcon = icons[type]
  return <SelectedIcon {...props} />
}

Icon.propTypes = {
  fill: PropTypes.oneOf(Object.keys(icons))
}

export default Icon
