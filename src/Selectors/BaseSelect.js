import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export const toggleSingle = (state, newSelection) => [newSelection]

export const toggleMultiple = (state, newSelection) =>
  state.selectedIndexes.includes(newSelection)
    ? state.selectedIndexes.filter(index => index !== newSelection)
    : [...state.selectedIndexes, newSelection]

class BaseSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string.isRequired,
    selectedClassName: PropTypes.string.isRequired,
    disabledClassName: PropTypes.string.isRequired,
    selectedIndexes: PropTypes.arrayOf(PropTypes.any.isRequired),
    disabledIndexes: PropTypes.arrayOf(PropTypes.any.isRequired),
    onSelect: PropTypes.func,
    stateReducer: PropTypes.func.isRequired
  }

  static defaultProps = {
    selectedIndexes: [],
    disabledIndexes: [],
    onSelect: () => {}
    /* selectedClassName: '' */
  }

  state = {
    selectedIndexes: this.props.selectedIndexes
  }

  onClick = selectedIndex => {
    const { stateReducer, onSelect } = this.props
    this.setState(
      state => ({ selectedIndexes: stateReducer(state, selectedIndex) }),
      () => onSelect(selectedIndex, this.state)
    )
  }

  render() {
    const {
      className,
      selectedClassName,
      disabledClassName,
      options,
      disabledIndexes
    } = this.props
    const { selectedIndexes } = this.state

    return options.map(option => {
      const content = option.content || option
      const index = option.index || option
      const isDisabled = disabledIndexes.includes(index)

      return (
        <div
          key={index}
          className={
            cx({
              [className]: true,
              [selectedClassName]: selectedIndexes.includes(index),
              [disabledClassName]: isDisabled
            })
            /* `${className} ${key === selectedIndex && */
            /* selectedClassName}` */
          }
          onClick={!isDisabled ? () => this.onClick(index) : undefined}
        >
          {content}
        </div>
      )
    })
  }
}

export default BaseSelect
