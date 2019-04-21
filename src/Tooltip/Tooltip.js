import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TooltipContent from './TooltipContent'

let mountNode = document.getElementById('ui-tooltips')

if (!mountNode) {
  mountNode = document.createElement('div')
  mountNode.id = 'ui-tooltips'
  document.body.appendChild(mountNode)
}

class Tooltip extends PureComponent {
  static defaultProps = {
    on: 'hover',
    position: 'top',
    offsetX: 10,
    offsetY: 10,
    viewportOffset: 5,
    closeTimeout: 150,
    forwardedRefPropName: 'forwardedRef',
    align: 'center'
  }

  static propTypes = {
    on: PropTypes.oneOf(['click', 'hover']),
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    align: PropTypes.oneOf(['start', 'end', 'center']),
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    closeTimeout: PropTypes.number,
    viewportOffset: PropTypes.number,
    trigger: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    /** Used for passing the `ref` when `trigger` has custom `forwardingRef` prop.
     E.g. <Link/> from `react-router-dom` has `innerRef` for forwarding refs*/
    forwardedRefPropName: PropTypes.string,
    /**
       Name of the prop, which will be passed to a trigger, containing tooltip shown state
       */
    passOpenStateAs: PropTypes.string,
    /**
       Class will be applied to the tooltip wrapper
     */
    className: PropTypes.string
  }

  state = {
    shown: false
  }

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

  render () {
    const { shown } = this.state
    const {
      on,
      trigger,
      forwardedRefPropName,
      passOpenStateAs,
      ...props
    } = this.props
    const triggerEvent = on === 'click' ? 'onClick' : 'onMouseEnter'
    const ref = typeof trigger.type !== 'string' ? forwardedRefPropName : 'ref'

    return (
      <>
        {React.cloneElement(trigger, {
          [ref]: this.triggerRef,
          [triggerEvent]: this.openTooltip,
          onMouseLeave: this.startCloseTimer,
          [passOpenStateAs]: passOpenStateAs ? shown : undefined
        })}
        {shown &&
          ReactDOM.createPortal(
            <TooltipContent
              triggerRef={this.triggerRef}
              mountNode={mountNode}
              onMouseEnter={this.openTooltip}
              onMouseLeave={this.startCloseTimer}
              {...props}
            />,
            document.body
          )}
      </>
    )
  }
}

export default Tooltip
