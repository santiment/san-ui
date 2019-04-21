import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import TooltipContent from '../Tooltip/TooltipContent'
import styles from './ContextMenu.module.scss'

class ContextMenu extends PureComponent {
  static defaultProps = {
    onOpen: () => {},
    onClose: () => {},
    defaultOpen: false,
    align: 'center',
    position: 'top',
    forwardedRefPropName: 'forwardedRef',
    offsetX: 10,
    offsetY: 10,
    viewportOffset: 5
  }

  static getDerivedStateFromProps ({ open }) {
    if (typeof open === 'undefined') {
      return null
    }

    return {
      open
    }
  }

  state = {
    open: this.props.defaultOpen
  }

  triggerRef = React.createRef()

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.onKeyUp)
  }

  openContextMenu = () => {
    this.setState({ open: true }, this.props.onOpen)
  }

  closeContextMenu = () => {
    this.setState({ open: false }, this.props.onClose)
  }

  onKeyUp = ({ code }) => {
    if (code === 'Escape' && this.state.open) {
      this.closeContextMenu()
    }
  }

  render () {
    const { open } = this.state
    const {
      trigger,
      forwardedRefPropName,
      passOpenStateAs,
      children,
      ...props
    } = this.props

    const ref = typeof trigger.type !== 'string' ? forwardedRefPropName : 'ref'

    return (
      <>
        {trigger &&
          React.cloneElement(trigger, {
            [ref]: this.triggerRef,
            onClick: trigger.props.onClick || this.openContextMenu,
            [passOpenStateAs]: passOpenStateAs ? open : undefined
          })}
        {open &&
          ReactDOM.createPortal(
            <div className={styles.wrapper}>
              <TooltipContent
                {...props}
                triggerRef={this.triggerRef}
                onMouseEnter={undefined}
                onMouseLeave={undefined}
              >
                {children}
              </TooltipContent>

              <div onClick={this.closeContextMenu} className={styles.bg} />
            </div>,
            document.body
          )}
      </>
    )
  }
}

export default ContextMenu
