import React, { PureComponent } from 'react'
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

// on: [click, hover]
// position: [top, right, bottom, left]. All centered and offseted to be in the viewport
class Tooltip extends PureComponent {
  static defaultProps = {
    align: 'top',
    offsetX: 10,
    offsetY: 10
  }

  state = {
    shown: false
  }

  tooltipRef = React.createRef()

  triggerRef = React.createRef()

  getTooltipPosition (trigger, tooltipHeight, tooltipWidth) {
    const { align, offsetX, offsetY } = this.props
    const {
      width: triggerWidth,
      height: triggerHeight,
      left: triggerLeft,
      top: triggerTop
    } = trigger.getBoundingClientRect()

    const sign = getAlignmentSign(align)
    let top = triggerTop + sign * offsetY
    let left = triggerLeft + sign * offsetX
    if (align === 'top' || align === 'bottom') {
      left += (triggerWidth - tooltipWidth) / 2
      top += align === 'top' ? -tooltipHeight : triggerHeight
    } else {
      top -= (tooltipHeight - triggerHeight) / 2
      left += align === 'left' ? -tooltipWidth : triggerWidth
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

  onMouseEnter = () => {
    this.setState({ shown: true })
  }

  render () {
    const { shown } = this.state
    const { trigger, children } = this.props

    return (
      <>
        {React.cloneElement(trigger, {
          ref: this.triggerRef,
          onMouseEnter: this.onMouseEnter
        })}
        {ReactDOM.createPortal(
          <Panel
            forwardedRef={this.tooltipRef}
            style={shown ? this.getTooltipStyles() : {}}
            className={styles.tooltip}
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
