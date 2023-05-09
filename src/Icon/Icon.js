/*
   NOTE
   For successful transformation, all icon components filename should start with the 'Icon' and end with the '.js' extension.
   E.G.:
      Component "IconProfileRound.js" will be transformed into "profile-round"
*/

import React from 'react'
import PropTypes from 'prop-types'

// const context =
//   process.env.NODE_ENV === 'test'
//     ? { keys: () => [] }
//     : require.context('./', false, /\.js$/)

// export const icons = context
//   .keys()
//   .filter((iconKey) => {
//     return iconKey !== './Icon.js' && iconKey !== './index.js'
//   })
//   .reduce((acc, iconKey) => {
//     const icon = iconKey
//       .slice('./Icon'.length, -'.js'.length)
//       .replace(/(\B[A-Z])/g, '-$1')
//       .toLowerCase()

//     acc[icon] = context(iconKey).default

//     return acc
//   }, {})

export const icons = {
  academy: require('./IconAcademy.js').default,
  'add-watchlist': require('./IconAddWatchlist.js').default,
  'added-watchlist': require('./IconAddedWatchlist.js').default,
  alert: require('./IconAlert.js').default,
  'arrow-double': require('./IconArrowDouble.js').default,
  'arrow-down': require('./IconArrowDown.js').default,
  'arrow-down-big': require('./IconArrowDownBig.js').default,
  'arrow-left': require('./IconArrowLeft.js').default,
  'arrow-left-big': require('./IconArrowLeftBig.js').default,
  'arrow-right': require('./IconArrowRight.js').default,
  'arrow-right-big': require('./IconArrowRightBig.js').default,
  'arrow-right-small': require('./IconArrowRightSmall.js').default,
  'arrow-up': require('./IconArrowUp.js').default,
  'arrow-up-big': require('./IconArrowUpBig.js').default,
  'asset-small': require('./IconAssetSmall.js').default,
  assets: require('./IconAssets.js').default,
  badge: require('./IconBadge.js').default,
  bell: require('./IconBell.js').default,
  'bell-off': require('./IconBellOff.js').default,
  'bullet-list': require('./IconBulletList.js').default,
  buy: require('./IconBuy.js').default,
  calendar: require('./IconCalendar.js').default,
  'calendar-small': require('./IconCalendarSmall.js').default,
  change: require('./IconChange.js').default,
  chart: require('./IconChart.js').default,
  'chart-bars': require('./IconChartBars.js').default,
  'chart-layout': require('./IconChartLayout.js').default,
  'chart-line': require('./IconChartLine.js').default,
  checkmark: require('./IconCheckmark.js').default,
  clock: require('./IconClock.js').default,
  'clock-small': require('./IconClockSmall.js').default,
  close: require('./IconClose.js').default,
  'close-medium': require('./IconCloseMedium.js').default,
  'close-small': require('./IconCloseSmall.js').default,
  'cloud-big': require('./IconCloudBig.js').default,
  'cloud-small': require('./IconCloudSmall.js').default,
  columns: require('./IconColumns.js').default,
  comment: require('./IconComment.js').default,
  'comment-small': require('./IconCommentSmall.js').default,
  compare: require('./IconCompare.js').default,
  connection: require('./IconConnection.js').default,
  'connection-big': require('./IconConnectionBig.js').default,
  'connection-small': require('./IconConnectionSmall.js').default,
  copy: require('./IconCopy.js').default,
  crown: require('./IconCrown.js').default,
  'crown-big': require('./IconCrownBig.js').default,
  customize: require('./IconCustomize.js').default,
  disk: require('./IconDisk.js').default,
  'disk-small': require('./IconDiskSmall.js').default,
  dots: require('./IconDots.js').default,
  'dots-small': require('./IconDotsSmall.js').default,
  'dots-vertical': require('./IconDotsVertical.js').default,
  duplicate: require('./IconDuplicate.js').default,
  edit: require('./IconEdit.js').default,
  'edit-small': require('./IconEditSmall.js').default,
  envelope: require('./IconEnvelope.js').default,
  error: require('./IconError.js').default,
  'external-link': require('./IconExternalLink.js').default,
  eye: require('./IconEye.js').default,
  'eye-disabled': require('./IconEyeDisabled.js').default,
  'eye-disabled-small': require('./IconEyeDisabledSmall.js').default,
  'eye-small': require('./IconEyeSmall.js').default,
  facebook: require('./IconFacebook.js').default,
  filter: require('./IconFilter.js').default,
  'filter-filled': require('./IconFilterFilled.js').default,
  'filter-small': require('./IconFilterSmall.js').default,
  finance: require('./IconFinance.js').default,
  fire: require('./IconFire.js').default,
  'fire-filled': require('./IconFireFilled.js').default,
  flash: require('./IconFlash.js').default,
  'flash-filled': require('./IconFlashFilled.js').default,
  folder: require('./IconFolder.js').default,
  follow: require('./IconFollow.js').default,
  followers: require('./IconFollowers.js').default,
  following: require('./IconFollowing.js').default,
  frozen: require('./IconFrozen.js').default,
  fullscreen: require('./IconFullscreen.js').default,
  'fullscreen-arrows': require('./IconFullscreenArrows.js').default,
  hamburger: require('./IconHamburger.js').default,
  'help-round': require('./IconHelpRound.js').default,
  hide: require('./IconHide.js').default,
  'history-clear': require('./IconHistoryClear.js').default,
  'info-round': require('./IconInfoRound.js').default,
  'info-round-small': require('./IconInfoRoundSmall.js').default,
  insight: require('./IconInsight.js').default,
  interval: require('./IconInterval.js').default,
  like: require('./IconLike.js').default,
  'like-small': require('./IconLikeSmall.js').default,
  link: require('./IconLink.js').default,
  'linked-in': require('./IconLinkedIn.js').default,
  lock: require('./IconLock.js').default,
  'lock-small': require('./IconLockSmall.js').default,
  logout: require('./IconLogout.js').default,
  mail: require('./IconMail.js').default,
  'mail-small': require('./IconMailSmall.js').default,
  merge: require('./IconMerge.js').default,
  metamask: require('./IconMetamask.js').default,
  'metamask-monochrome': require('./IconMetamaskMonochrome.js').default,
  metric: require('./IconMetric.js').default,
  mint: require('./IconMint.js').default,
  nft: require('./IconNft.js').default,
  pause: require('./IconPause.js').default,
  'pause-round': require('./IconPauseRound.js').default,
  picture: require('./IconPicture.js').default,
  play: require('./IconPlay.js').default,
  'play-round': require('./IconPlayRound.js').default,
  plus: require('./IconPlus.js').default,
  'plus-round': require('./IconPlusRound.js').default,
  'plus-round-small': require('./IconPlusRoundSmall.js').default,
  'plus-small': require('./IconPlusSmall.js').default,
  'pointer-right': require('./IconPointerRight.js').default,
  'pointer-right-small': require('./IconPointerRightSmall.js').default,
  'products-trigger': require('./IconProductsTrigger.js').default,
  profile: require('./IconProfile.js').default,
  'profile-small': require('./IconProfileSmall.js').default,
  'question-round': require('./IconQuestionRound.js').default,
  'question-round-small': require('./IconQuestionRoundSmall.js').default,
  quote: require('./IconQuote.js').default,
  reddit: require('./IconReddit.js').default,
  refresh: require('./IconRefresh.js').default,
  remove: require('./IconRemove.js').default,
  'remove-small': require('./IconRemoveSmall.js').default,
  report: require('./IconReport.js').default,
  revert: require('./IconRevert.js').default,
  ring: require('./IconRing.js').default,
  save: require('./IconSave.js').default,
  screener: require('./IconScreener.js').default,
  search: require('./IconSearch.js').default,
  'search-small': require('./IconSearchSmall.js').default,
  sell: require('./IconSell.js').default,
  settings: require('./IconSettings.js').default,
  'settings-big': require('./IconSettingsBig.js').default,
  share: require('./IconShare.js').default,
  sidebar: require('./IconSidebar.js').default,
  sigma: require('./IconSigma.js').default,
  signal: require('./IconSignal.js').default,
  social: require('./IconSocial.js').default,
  'subtract-round': require('./IconSubtractRound.js').default,
  'success-round': require('./IconSuccessRound.js').default,
  telegram: require('./IconTelegram.js').default,
  'text-big': require('./IconTextBig.js').default,
  'text-bold': require('./IconTextBold.js').default,
  'text-italic': require('./IconTextItalic.js').default,
  'text-small': require('./IconTextSmall.js').default,
  'text-underline': require('./IconTextUnderline.js').default,
  'triangle-both': require('./IconTriangleBoth.js').default,
  'triangle-down': require('./IconTriangleDown.js').default,
  'triangle-right': require('./IconTriangleRight.js').default,
  'triangle-up': require('./IconTriangleUp.js').default,
  twitter: require('./IconTwitter.js').default,
  'up-down': require('./IconUpDown.js').default,
  update: require('./IconUpdate.js').default,
  'view-option': require('./IconViewOption.js').default,
  wallet: require('./IconWallet.js').default,
  warning: require('./IconWarning.js').default,
  watchlist: require('./IconWatchlist.js').default,
  'watchlist-plus': require('./IconWatchlistPlus.js').default,
  'words-list': require('./IconWordsList.js').default,
  tag: require('./iconTag.js').default
}

const Icon = ({ type, forwardedRef, ...props }) => {
  if (process.NODE_ENV === 'development') {
    if (!type || icons[type]) {
      throw new Error('Unknow icon type -> ', type)
    }
  }

  return React.cloneElement(
    icons[type],
    Object.assign({ ref: forwardedRef }, props)
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired
}

export default (process.env.NODE_ENV === 'test' ? () => <svg /> : Icon)
