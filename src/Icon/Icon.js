import React from 'react'
import PropTypes from 'prop-types'
import IconHelpRound from './IconHelpRound'
import IconProfile from './IconProfile'
import IconCheckmark from './IconCheckmark'
import IconProfileRound from './IconProfileRound'
import IconClose from './IconClose'
import IconReddit from './IconReddit'
import IconTwitter from './IconTwitter'
import IconFacebook from './IconFacebook'
import IconLinkedIn from './IconLinkedIn'
import IconTelegram from './IconTelegram'
import IconLock from './IconLock'
import IconEye from './IconEye'
import IconPlusRound from './IconPlusRound'
import IconShare from './IconShare'

export const icons = {
  checkmark: IconCheckmark,
  profile: IconProfile,
  'profile-round': IconProfileRound,
  'help-round': IconHelpRound,
  close: IconClose,
  reddit: IconReddit,
  twitter: IconTwitter,
  facebook: IconFacebook,
  linkedIn: IconLinkedIn,
  telegram: IconTelegram,
  lock: IconLock,
  eye: IconEye,
  'plus-round': IconPlusRound,
  share: IconShare
}

const Icon = ({ type, ...props }) => {
  const SelectedIcon = icons[type]
  return <SelectedIcon {...props} />
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired
}

export default Icon
