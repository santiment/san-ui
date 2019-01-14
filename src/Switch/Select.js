import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BaseSelect from './Switch'
import styles from './Switch.module.scss'

class Select extends Component {
  static propTypes = {
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    selectedIndex: 0,
    onSelect: () => {}
  }

  state = {
    selectedIndex: this.props.selectedIndex
  }

  onClick = selectedIndex => {
    const { onSelect } = this.props
    this.setState({ selectedIndex })

    onSelect(selectedIndex)
  }

  render() {
    const { ...props } = this.props
    const { selectedIndex } = this.state
    return (
      <BaseSelect
        {...props}
        selectedIndex={selectedIndex}
        onClick={this.onClick}
      />
    )
  }
}

export default Select
