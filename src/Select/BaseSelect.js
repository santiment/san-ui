import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BaseSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string.isRequired,
    selectedClassName: PropTypes.string,
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    selectedIndex: 0,
    onSelect: () => {},
    selectedClassName: ''
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
    const { className, selectedClassName, options } = this.props
    const { selectedIndex } = this.state
    return options.map((option, i) => {
      return (
        <button
          key={i}
          className={`${className} ${i === selectedIndex && selectedClassName}`}
          onClick={() => this.onClick(i)}
        >
          {option}
        </button>
      )
    })
  }
}

export default BaseSelect
