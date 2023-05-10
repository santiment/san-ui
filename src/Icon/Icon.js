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
import IconAcademy from './IconAcademy'
import IconAddWatchlist from './IconAddWatchlist'
import IconAddedWatchlist from './IconAddedWatchlist'
import IconAlert from './IconAlert'
import IconArrowDouble from './IconArrowDouble'
import IconArrowDown from './IconArrowDown'
import IconArrowDownBig from './IconArrowDownBig'
import IconArrowLeft from './IconArrowLeft'
import IconArrowLeftBig from './IconArrowLeftBig'
import IconArrowRight from './IconArrowRight'
import IconArrowRightBig from './IconArrowRightBig'
import IconArrowRightSmall from './IconArrowRightSmall'
import IconArrowUp from './IconArrowUp'
import IconArrowUpBig from './IconArrowUpBig'
import IconAssetSmall from './IconAssetSmall'
import IconAssets from './IconAssets'
import IconBadge from './IconBadge'
import IconBell from './IconBell'
import IconBellOff from './IconBellOff'
import IconBulletList from './IconBulletList'
import IconBuy from './IconBuy'
import IconCalendar from './IconCalendar'
import IconCalendarSmall from './IconCalendarSmall'
import IconChange from './IconChange'
import IconChart from './IconChart'
import IconChartBars from './IconChartBars'
import IconChartLayout from './IconChartLayout'
import IconChartLine from './IconChartLine'
import IconCheckmark from './IconCheckmark'
import IconClock from './IconClock'
import IconClockSmall from './IconClockSmall'
import IconClose from './IconClose'
import IconCloseMedium from './IconCloseMedium'
import IconCloseSmall from './IconCloseSmall'
import IconCloudBig from './IconCloudBig'
import IconCloudSmall from './IconCloudSmall'
import IconColumns from './IconColumns'
import IconComment from './IconComment'
import IconCommentSmall from './IconCommentSmall'
import IconCompare from './IconCompare'
import IconConnection from './IconConnection'
import IconConnectionBig from './IconConnectionBig'
import IconConnectionSmall from './IconConnectionSmall'
import IconCopy from './IconCopy'
import IconCrown from './IconCrown'
import IconCrownBig from './IconCrownBig'
import IconCustomize from './IconCustomize'
import IconDisk from './IconDisk'
import IconDiskSmall from './IconDiskSmall'
import IconDots from './IconDots'
import IconDotsSmall from './IconDotsSmall'
import IconDotsVertical from './IconDotsVertical'
import IconDuplicate from './IconDuplicate'
import IconEdit from './IconEdit'
import IconEditSmall from './IconEditSmall'
import IconEnvelope from './IconEnvelope'
import IconError from './IconError'
import IconExternalLink from './IconExternalLink'
import IconEye from './IconEye'
import IconEyeDisabled from './IconEyeDisabled'
import IconEyeDisabledSmall from './IconEyeDisabledSmall'
import IconEyeSmall from './IconEyeSmall'
import IconFacebook from './IconFacebook'
import IconFilter from './IconFilter'
import IconFilterFilled from './IconFilterFilled'
import IconFilterSmall from './IconFilterSmall'
import IconFinance from './IconFinance'
import IconFire from './IconFire'
import IconFireFilled from './IconFireFilled'
import IconFlash from './IconFlash'
import IconFlashFilled from './IconFlashFilled'
import IconFolder from './IconFolder'
import IconFollow from './IconFollow'
import IconFollowers from './IconFollowers'
import IconFollowing from './IconFollowing'
import IconFrozen from './IconFrozen'
import IconFullscreen from './IconFullscreen'
import IconFullscreenArrows from './IconFullscreenArrows'
import IconHamburger from './IconHamburger'
import IconHelpRound from './IconHelpRound'
import IconHide from './IconHide'
import IconHistoryClear from './IconHistoryClear'
import IconInfoRound from './IconInfoRound'
import IconInfoRoundSmall from './IconInfoRoundSmall'
import IconInsight from './IconInsight'
import IconInterval from './IconInterval'
import IconLike from './IconLike'
import IconLikeSmall from './IconLikeSmall'
import IconLink from './IconLink'
import IconLinkedIn from './IconLinkedIn'
import IconLock from './IconLock'
import IconLockSmall from './IconLockSmall'
import IconLogout from './IconLogout'
import IconMail from './IconMail'
import IconMailSmall from './IconMailSmall'
import IconMerge from './IconMerge'
import IconMetamask from './IconMetamask'
import IconMetamaskMonochrome from './IconMetamaskMonochrome'
import IconMetric from './IconMetric'
import IconMint from './IconMint'
import IconNft from './IconNft'
import IconPause from './IconPause'
import IconPauseRound from './IconPauseRound'
import IconPicture from './IconPicture'
import IconPlay from './IconPlay'
import IconPlayRound from './IconPlayRound'
import IconPlus from './IconPlus'
import IconPlusRound from './IconPlusRound'
import IconPlusRoundSmall from './IconPlusRoundSmall'
import IconPlusSmall from './IconPlusSmall'
import IconPointerRight from './IconPointerRight'
import IconPointerRightSmall from './IconPointerRightSmall'
import IconProductsTrigger from './IconProductsTrigger'
import IconProfile from './IconProfile'
import IconProfileSmall from './IconProfileSmall'
import IconQuestionRound from './IconQuestionRound'
import IconQuestionRoundSmall from './IconQuestionRoundSmall'
import IconQuote from './IconQuote'
import IconReddit from './IconReddit'
import IconRefresh from './IconRefresh'
import IconRemove from './IconRemove'
import IconRemoveSmall from './IconRemoveSmall'
import IconReport from './IconReport'
import IconRevert from './IconRevert'
import IconRing from './IconRing'
import IconSave from './IconSave'
import IconScreener from './IconScreener'
import IconSearch from './IconSearch'
import IconSearchSmall from './IconSearchSmall'
import IconSell from './IconSell'
import IconSettings from './IconSettings'
import IconSettingsBig from './IconSettingsBig'
import IconShare from './IconShare'
import IconSidebar from './IconSidebar'
import IconSigma from './IconSigma'
import IconSignal from './IconSignal'
import IconSocial from './IconSocial'
import IconSubtractRound from './IconSubtractRound'
import IconSuccessRound from './IconSuccessRound'
import IconTelegram from './IconTelegram'
import IconTextBig from './IconTextBig'
import IconTextBold from './IconTextBold'
import IconTextItalic from './IconTextItalic'
import IconTextSmall from './IconTextSmall'
import IconTextUnderline from './IconTextUnderline'
import IconTriangleBoth from './IconTriangleBoth'
import IconTriangleDown from './IconTriangleDown'
import IconTriangleRight from './IconTriangleRight'
import IconTriangleUp from './IconTriangleUp'
import IconTwitter from './IconTwitter'
import IconUpDown from './IconUpDown'
import IconUpdate from './IconUpdate'
import IconViewOption from './IconViewOption'
import IconWallet from './IconWallet'
import IconWarning from './IconWarning'
import IconWatchlist from './IconWatchlist'
import IconWatchlistPlus from './IconWatchlistPlus'
import IconWordsList from './IconWordsList'
import iconTag from './iconTag'

export const icons = {
  academy: IconAcademy,
  'add-watchlist': IconAddWatchlist,
  'added-watchlist': IconAddedWatchlist,
  alert: IconAlert,
  'arrow-double': IconArrowDouble,
  'arrow-down': IconArrowDown,
  'arrow-down-big': IconArrowDownBig,
  'arrow-left': IconArrowLeft,
  'arrow-left-big': IconArrowLeftBig,
  'arrow-right': IconArrowRight,
  'arrow-right-big': IconArrowRightBig,
  'arrow-right-small': IconArrowRightSmall,
  'arrow-up': IconArrowUp,
  'arrow-up-big': IconArrowUpBig,
  'asset-small': IconAssetSmall,
  assets: IconAssets,
  badge: IconBadge,
  bell: IconBell,
  'bell-off': IconBellOff,
  'bullet-list': IconBulletList,
  buy: IconBuy,
  calendar: IconCalendar,
  'calendar-small': IconCalendarSmall,
  change: IconChange,
  chart: IconChart,
  'chart-bars': IconChartBars,
  'chart-layout': IconChartLayout,
  'chart-line': IconChartLine,
  checkmark: IconCheckmark,
  clock: IconClock,
  'clock-small': IconClockSmall,
  close: IconClose,
  'close-medium': IconCloseMedium,
  'close-small': IconCloseSmall,
  'cloud-big': IconCloudBig,
  'cloud-small': IconCloudSmall,
  columns: IconColumns,
  comment: IconComment,
  'comment-small': IconCommentSmall,
  compare: IconCompare,
  connection: IconConnection,
  'connection-big': IconConnectionBig,
  'connection-small': IconConnectionSmall,
  copy: IconCopy,
  crown: IconCrown,
  'crown-big': IconCrownBig,
  customize: IconCustomize,
  disk: IconDisk,
  'disk-small': IconDiskSmall,
  dots: IconDots,
  'dots-small': IconDotsSmall,
  'dots-vertical': IconDotsVertical,
  duplicate: IconDuplicate,
  edit: IconEdit,
  'edit-small': IconEditSmall,
  envelope: IconEnvelope,
  error: IconError,
  'external-link': IconExternalLink,
  eye: IconEye,
  'eye-disabled': IconEyeDisabled,
  'eye-disabled-small': IconEyeDisabledSmall,
  'eye-small': IconEyeSmall,
  facebook: IconFacebook,
  filter: IconFilter,
  'filter-filled': IconFilterFilled,
  'filter-small': IconFilterSmall,
  finance: IconFinance,
  fire: IconFire,
  'fire-filled': IconFireFilled,
  flash: IconFlash,
  'flash-filled': IconFlashFilled,
  folder: IconFolder,
  follow: IconFollow,
  followers: IconFollowers,
  following: IconFollowing,
  frozen: IconFrozen,
  fullscreen: IconFullscreen,
  'fullscreen-arrows': IconFullscreenArrows,
  hamburger: IconHamburger,
  'help-round': IconHelpRound,
  hide: IconHide,
  'history-clear': IconHistoryClear,
  'info-round': IconInfoRound,
  'info-round-small': IconInfoRoundSmall,
  insight: IconInsight,
  interval: IconInterval,
  like: IconLike,
  'like-small': IconLikeSmall,
  link: IconLink,
  'linked-in': IconLinkedIn,
  lock: IconLock,
  'lock-small': IconLockSmall,
  logout: IconLogout,
  mail: IconMail,
  'mail-small': IconMailSmall,
  merge: IconMerge,
  metamask: IconMetamask,
  'metamask-monochrome': IconMetamaskMonochrome,
  metric: IconMetric,
  mint: IconMint,
  nft: IconNft,
  pause: IconPause,
  'pause-round': IconPauseRound,
  picture: IconPicture,
  play: IconPlay,
  'play-round': IconPlayRound,
  plus: IconPlus,
  'plus-round': IconPlusRound,
  'plus-round-small': IconPlusRoundSmall,
  'plus-small': IconPlusSmall,
  'pointer-right': IconPointerRight,
  'pointer-right-small': IconPointerRightSmall,
  'products-trigger': IconProductsTrigger,
  profile: IconProfile,
  'profile-small': IconProfileSmall,
  'question-round': IconQuestionRound,
  'question-round-small': IconQuestionRoundSmall,
  quote: IconQuote,
  reddit: IconReddit,
  refresh: IconRefresh,
  remove: IconRemove,
  'remove-small': IconRemoveSmall,
  report: IconReport,
  revert: IconRevert,
  ring: IconRing,
  save: IconSave,
  screener: IconScreener,
  search: IconSearch,
  'search-small': IconSearchSmall,
  sell: IconSell,
  settings: IconSettings,
  'settings-big': IconSettingsBig,
  share: IconShare,
  sidebar: IconSidebar,
  sigma: IconSigma,
  signal: IconSignal,
  social: IconSocial,
  'subtract-round': IconSubtractRound,
  'success-round': IconSuccessRound,
  telegram: IconTelegram,
  'text-big': IconTextBig,
  'text-bold': IconTextBold,
  'text-italic': IconTextItalic,
  'text-small': IconTextSmall,
  'text-underline': IconTextUnderline,
  'triangle-both': IconTriangleBoth,
  'triangle-down': IconTriangleDown,
  'triangle-right': IconTriangleRight,
  'triangle-up': IconTriangleUp,
  twitter: IconTwitter,
  'up-down': IconUpDown,
  update: IconUpdate,
  'view-option': IconViewOption,
  wallet: IconWallet,
  warning: IconWarning,
  watchlist: IconWatchlist,
  'watchlist-plus': IconWatchlistPlus,
  'words-list': IconWordsList,
  tag: iconTag
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
