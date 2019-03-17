import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Panel from '../Panel/Panel'
import styles from './Tooltip.module.scss'

let mountNode = document.getElementById('ui-tooltips')

if (!mountNode) {
  mountNode = document.createElement('div')
  mountNode.id = 'ui-tooltips'
  document.body.appendChild(mountNode)
}

const getAlignmentSign = align => {
  switch (align) {
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
    align: 'top',
    offsetX: 10,
    offsetY: 10,
    closeTimeout: 150
  }

  static propTypes = {
    on: PropTypes.oneOf(['click', 'hover']),
    align: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    closeTimeout: PropTypes.number
  }

  state = {
    shown: false
  }

  tooltipRef = React.createRef()

  triggerRef = React.createRef()

  componentWillUnmount () {
    clearTimeout(this.closeTimer)
  }

  startCloseTimeout () {
    this.closeTimer = setTimeout(
      () => this.setState({ shown: false }),
      this.props.closeTimeout
    )
  }

  stopCloseTimeout () {
    clearTimeout(this.closeTimer)
  }

  closeTooltip = () => {
    this.startCloseTimeout()
  }

  openTooltip = () => {
    this.stopCloseTimeout()
    this.setState({ shown: true })
  }

  getTooltipPosition (trigger, tooltipHeight, tooltipWidth) {
    const { align, offsetX, offsetY } = this.props
    const {
      width: triggerWidth,
      height: triggerHeight,
      left: triggerLeft,
      top: triggerTop
    } = trigger.getBoundingClientRect()

    const sign = getAlignmentSign(align)
    let top = triggerTop
    let left = triggerLeft

    if (align === 'top' || align === 'bottom') {
      left += (triggerWidth - tooltipWidth) / 2
      top += (align === 'top' ? -tooltipHeight : triggerHeight) + sign * offsetY
    } else {
      top += (triggerHeight - tooltipHeight) / 2
      left += (align === 'left' ? -tooltipWidth : triggerWidth) + sign * offsetX
    }

    return { top, left }
  }

  getTooltipStyles () {
    const { current: trigger } = this.triggerRef
    const { current: tooltip } = this.tooltipRef
    const {
      scrollX,
      scrollY,
      innerWidth: windowWidth,
      innerHeight: windowHeight
    } = window

    const { offsetWidth: tooltipWidth, offsetHeight: tooltipHeight } = tooltip

    let { top, left } = this.getTooltipPosition(
      trigger,
      tooltipHeight,
      tooltipWidth
    )

    if (left < 10) {
      left = 10
    } else if (left + tooltipWidth > windowWidth - 10) {
      left = windowWidth - 10 - tooltipWidth
    }
    if (top < 10) {
      top = 10
    } else if (top + tooltipHeight > windowHeight - 10) {
      top = windowHeight - 10 - tooltipHeight
    }

    return {
      visibility: 'visible',
      top: `${top + scrollY}px`,
      left: `${left + scrollX}px`
    }
  }

  render () {
    const { shown } = this.state
    const { on, trigger, children } = this.props
    const triggerEvent = on === 'click' ? 'onClick' : 'onMouseEnter'

    return (
      <>
        {React.cloneElement(trigger, {
          ref: this.triggerRef,
          [triggerEvent]: this.openTooltip,
          onMouseLeave: this.closeTooltip
        })}
        {ReactDOM.createPortal(
          <Panel
            forwardedRef={this.tooltipRef}
            style={shown ? this.getTooltipStyles() : {}}
            className={styles.tooltip}
            onMouseEnter={this.openTooltip}
            onMouseLeave={this.closeTooltip}
          >
            {children}
          </Panel>,
          mountNode
        )}
      </>
    )
  }
}

export default Tooltip
