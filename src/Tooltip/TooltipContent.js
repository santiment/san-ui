import React, { PureComponent } from 'react'
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

const getPositionsPrioritiesByPosition = position => {
  switch (position) {
    case 'top':
      return ['top', 'bottom', 'right', 'left']
    case 'bottom':
      return ['bottom', 'top', 'right', 'left']
    case 'left':
      return ['left', 'right', 'top', 'bottom']
    case 'right':
      return ['right', 'left', 'top', 'bottom']
    default:
      return ['top', 'bottom', 'right', 'left']
  }
}

const calculateAlignment = (triggerProp, tooltipProp, align) => {
  switch (align) {
    case 'start':
      return 0
    case 'center':
      return (triggerProp - tooltipProp) / 2
    case 'end':
      return triggerProp - tooltipProp
  }
}

const getArrowPosition = (align, position, offset) => {
  const offsetStyle = getArrowOffset(align, position, offset)
  switch (position) {
    case 'top':
      return { top: '100%', ...offsetStyle }
    case 'bottom':
      return { top: 0, ...offsetStyle }
    case 'left':
      return { left: '100%', ...offsetStyle }
    case 'right':
      return { left: 0, ...offsetStyle }
  }
}

const getArrowOffset = (align, position, offset) => {
  if (position === 'top' || position === 'bottom') {
    const transform = 'translateY(-50%) rotate(45deg)'
    switch (align) {
      case 'start':
        return { left: offset, transform: `${transform}` }
      case 'center':
        return {
          left: '50%',
          transform: `translateX(-50%) ${transform}`
        }
      case 'end':
        return { right: offset, transform: `${transform}` }
    }
  } else {
    const transform = 'translateX(-50%) rotate(45deg)'
    switch (align) {
      case 'start':
        return { top: offset, transform: `${transform}` }
      case 'center':
        return {
          top: '50%',
          transform: `translateY(-50%) ${transform}`
        }
      case 'end':
        return { bottom: offset, transform: `${transform}` }
    }
  }
}

const isCoverTriggerBorder = (triggerBorderPos, tooltipStart, tooltipEnd) => {
  if (triggerBorderPos >= tooltipStart && triggerBorderPos <= tooltipEnd) {
    return true
  }

  return false
}

const isCoverTrigger = ({
  top,
  bottom,
  left,
  right,
  position,
  triggerTop,
  triggerBottom,
  triggerLeft,
  triggerRight
}) => {
  switch (position) {
    case 'top':
      return isCoverTriggerBorder(triggerTop, top, bottom)
    case 'bottom':
      return isCoverTriggerBorder(triggerBottom, top, bottom)
    case 'left':
      return isCoverTriggerBorder(triggerLeft, left, right)
    case 'right':
      return isCoverTriggerBorder(triggerRight, left, right)
  }
}

const shiftFromBorders = (
  rawTop,
  rawLeft,
  tooltipWidth,
  tooltipHeight,
  windowWidth,
  windowHeight,
  viewportOffset
) => {
  let top = rawTop
  let left = rawLeft

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

  return { top, left }
}

class TooltipContent extends PureComponent {
  tooltipRef = React.createRef()

  componentDidMount () {
    this.forceUpdate()
  }

  getTooltipCoordinates ({
    triggerWidth,
    triggerHeight,
    triggerLeft,
    triggerTop,
    tooltipHeight,
    tooltipWidth,
    windowWidth,
    windowHeight,
    viewportOffset,
    position
  }) {
    const { offsetX, offsetY, align } = this.props

    const sign = getSignByPosition(position)
    let top = triggerTop
    let left = triggerLeft

    if (position === 'top' || position === 'bottom') {
      top +=
        (position === 'top' ? -tooltipHeight : triggerHeight) + sign * offsetY
      left += calculateAlignment(triggerWidth, tooltipWidth, align)
    } else {
      top += calculateAlignment(triggerHeight, tooltipHeight, align)
      left +=
        (position === 'left' ? -tooltipWidth : triggerWidth) + sign * offsetX
    }

    const { top: shiftedTop, left: shiftedLeft } = shiftFromBorders(
      top,
      left,
      tooltipWidth,
      tooltipHeight,
      windowWidth,
      windowHeight,
      viewportOffset
    )

    return {
      top: shiftedTop,
      left: shiftedLeft,
      bottom: shiftedTop + tooltipHeight,
      right: shiftedLeft + tooltipWidth
    }
  }

  getTooltipStyles () {
    const { current: tooltip } = this.tooltipRef
    if (!tooltip) {
      return
    }

    const {
      viewportOffset,
      withArrow,
      arrowOffset = 8,
      align,
      triggerRef: { current: trigger }
    } = this.props
    const {
      scrollX,
      scrollY,
      innerWidth: windowWidth,
      innerHeight: windowHeight
    } = window

    const { offsetWidth: tooltipWidth, offsetHeight: tooltipHeight } = tooltip

    const {
      width: triggerWidth,
      height: triggerHeight,
      left: triggerLeft,
      top: triggerTop
    } = trigger.getBoundingClientRect()

    const positionPriorities = getPositionsPrioritiesByPosition(
      this.props.position
    )

    let tooltipTop, tooltipLeft, tooltipPosition

    for (let i = 0; i < 4; i++) {
      const { top, left, bottom, right } = this.getTooltipCoordinates({
        triggerWidth,
        triggerHeight,
        triggerLeft,
        triggerTop,
        tooltipHeight,
        tooltipWidth,
        windowWidth,
        windowHeight,
        viewportOffset,
        position: positionPriorities[i]
      })

      if (
        !isCoverTrigger({
          top,
          left,
          bottom,
          right,
          position: positionPriorities[i],
          triggerTop,
          triggerLeft,
          triggerBottom: triggerTop + triggerHeight,
          triggerRight: triggerLeft + triggerWidth
        })
      ) {
        tooltipTop = top
        tooltipLeft = left
        tooltipPosition = positionPriorities[i]
        break
      }
    }

    const arrowStyle = withArrow
      ? getArrowPosition(align, tooltipPosition, `${arrowOffset}px`)
      : {}

    return {
      tooltipStyle: {
        top: `${tooltipTop + scrollY}px`,
        left: `${tooltipLeft + scrollX}px`
      },
      arrow: arrowStyle
    }
  }

  render () {
    const {
      position,
      align,
      className,
      onMouseEnter,
      onMouseLeave,
      children,
      offsetX,
      offsetY,
      withCss,
      withArrow,
      arrowOffset = 8,
      arrowClassName
    } = this.props

    let style
    let arrowStyle
    let classes

    if (withCss) {
      const sign = getSignByPosition(position)
      const isVerticalPosition = position === 'top' || position === 'bottom'

      style = {
        [`margin${sign > 0 ? 'Left' : 'Right'}`]:
          isVerticalPosition || `${offsetX}px`,
        [`margin${sign > 0 ? 'Top' : 'Bottom'}`]:
          isVerticalPosition && `${offsetY}px`
      }
      classes = [styles.withCss, styles[position], styles[align]]

      if (withArrow) {
        arrowStyle = getArrowPosition(align, position, `${arrowOffset}px`)
      }
    } else {
      const { tooltipStyle, arrow } = this.getTooltipStyles() || {}
      style = tooltipStyle
      arrowStyle = arrow
      classes = []
    }

    return (
      <div
        ref={this.tooltipRef}
        style={style}
        className={cx(styles.tooltip, className, ...classes)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {withArrow && (
          <div
            style={arrowStyle}
            className={cx(styles.arrow, arrowClassName)}
          />
        )}
        {children}
      </div>
    )
  }
}

export default TooltipContent
