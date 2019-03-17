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

// on: [click, hover]
// position: [top, right, bottom, left]. All centered and offseted to be in the viewport
class Tooltip extends PureComponent {
  state = {
    shown: false
  }

  tooltipRef = React.createRef()

  triggerRef = React.createRef()

  getTooltipStyles () {
    const { current: trigger } = this.triggerRef
    const { current: tooltip } = this.tooltipRef
    const {
      scrollX,
      scrollY,
      innerWidth: windowWidth,
      innerHeight: windowHeight
    } = window
    console.log(trigger, tooltip)

    /* const triggerRect = trigger.getBoundingClientRect() */
    const { clientWidth, clientHeight } = tooltip

    const {
      offsetWidth: tooltipWidth,
      offsetHeight: tooltipHeight,
      offsetLeft: tooltipLeft,
      offsetTop: tooltipTop
    } = tooltip
    const {
      width: triggerWidth,
      height: triggerHeight,
      left: triggerLeft,
      top: triggerTop
    } = trigger.getBoundingClientRect()

    const target = 'top'

    let left = triggerLeft + (triggerWidth - tooltipWidth) / 2
    let top = triggerTop - tooltipHeight

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
    console.log({ left, top, clientHeight })

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
