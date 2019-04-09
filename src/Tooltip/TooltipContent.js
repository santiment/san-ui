import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import styles from './Tooltip.module.scss'

const getSignByPosition = position => {
  switch (position) {
    case 'top':
      return -1
    case 'left':
      return -1
    case 'right':
      return 1
    case 'bottom':
      return 1
    default:
      return 0
  }
}

class TooltipContent extends PureComponent {
  tooltipRef = React.createRef()

  componentDidMount () {
    this.forceUpdate()
  }

  getTooltipCoordinates (trigger, tooltipHeight, tooltipWidth) {
    const { position, offsetX, offsetY } = this.props
    const {
      width: triggerWidth,
      height: triggerHeight,
      left: triggerLeft,
      top: triggerTop
    } = trigger.getBoundingClientRect()

    const sign = getSignByPosition(position)
    let top = triggerTop
    let left = triggerLeft

    if (position === 'top' || position === 'bottom') {
      top +=
        (position === 'top' ? -tooltipHeight : triggerHeight) + sign * offsetY
      left += (triggerWidth - tooltipWidth) / 2
    } else {
      top += (triggerHeight - tooltipHeight) / 2
      left +=
        (position === 'left' ? -tooltipWidth : triggerWidth) + sign * offsetX
    }

    return { top, left }
  }

  getTooltipStyles () {
    const { current: tooltip } = this.tooltipRef
    if (!tooltip) {
      return
    }

    const {
      viewportOffset,
      triggerRef: { current: trigger }
    } = this.props
    const {
      scrollX,
      scrollY,
      innerWidth: windowWidth,
      innerHeight: windowHeight
    } = window

    const { offsetWidth: tooltipWidth, offsetHeight: tooltipHeight } = tooltip

    let { top, left } = this.getTooltipCoordinates(
      trigger,
      tooltipHeight,
      tooltipWidth
    )

    if (left < viewportOffset) {
      left = viewportOffset
    } else if (left + tooltipWidth > windowWidth - viewportOffset) {
      left = windowWidth - viewportOffset - tooltipWidth
    }
    if (top < viewportOffset) {
      top = viewportOffset
    } else if (top + tooltipHeight > windowHeight - viewportOffset) {
      top = windowHeight - viewportOffset - tooltipHeight
    }

    return {
      visibility: 'visible',
      top: `${top + scrollY}px`,
      left: `${left + scrollX}px`
    }
  }

  render () {
    const {
      className,
      mountNode,
      onMouseEnter,
      onMouseLeave,
      children
    } = this.props
    return ReactDOM.createPortal(
      <div
        ref={this.tooltipRef}
        style={this.getTooltipStyles()}
        className={cx(styles.tooltip, className)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>,
      mountNode
    )
  }
}

export default TooltipContent
