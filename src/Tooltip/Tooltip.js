import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styles from './Tooltip.module.scss'

let mountNode = document.getElementById('ui-tooltips')

if (!mountNode) {
  mountNode = document.createElement('div')
  mountNode.id = 'ui-tooltips'
  document.body.appendChild(mountNode)
}

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

class Tooltip extends PureComponent {
  static defaultProps = {
    on: 'hover',
    position: 'top',
    offsetX: 10,
    offsetY: 10,
    viewportOffset: 5,
    closeTimeout: 150,
    forwardedRefPropName: 'forwardedRef'
  }

  static propTypes = {
    on: PropTypes.oneOf(['click', 'hover']),
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    closeTimeout: PropTypes.number,
    viewportOffset: PropTypes.number,
    trigger: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    /** Used for passing the `ref` when `trigger` has custom `forwardingRef` prop.
     E.g. <Link/> from `react-router-dom` has `innerRef` for forwarding refs*/
    forwardedRefPropName: PropTypes.string,
    /**
       Class will be applied to the tooltip wrapper
    */
    className: PropTypes.string
  }

  state = {
    shown: false
  }

  tooltipRef = React.createRef()

  triggerRef = React.createRef()

  componentWillUnmount () {
    clearTimeout(this.closeTimer)
  }

  startCloseTimer = () => {
    this.closeTimer = setTimeout(
      () => this.setState({ shown: false }),
      this.props.closeTimeout
    )
  }

  stopCloseTimer () {
    clearTimeout(this.closeTimer)
  }

  openTooltip = () => {
    this.stopCloseTimer()
    this.setState({ shown: true })
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
    const { viewportOffset } = this.props
    const { current: trigger } = this.triggerRef
    const { current: tooltip } = this.tooltipRef
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
    const { shown } = this.state
    const {
      on,
      trigger,
      children,
      forwardedRefPropName,
      className
    } = this.props
    const triggerEvent = on === 'click' ? 'onClick' : 'onMouseEnter'
    const ref = typeof trigger.type !== 'string' ? forwardedRefPropName : 'ref'

    return (
      <>
        {React.cloneElement(trigger, {
          [ref]: this.triggerRef,
          [triggerEvent]: this.openTooltip,
          onMouseLeave: this.startCloseTimer
        })}
        {ReactDOM.createPortal(
          <div
            ref={this.tooltipRef}
            style={shown ? this.getTooltipStyles() : undefined}
            className={cx(styles.tooltip, className)}
            onMouseEnter={this.openTooltip}
            onMouseLeave={this.startCloseTimer}
          >
            {children}
          </div>,
          mountNode
        )}
      </>
    )
  }
}

export default Tooltip
