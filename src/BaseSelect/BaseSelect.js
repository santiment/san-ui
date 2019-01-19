import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export const singleSelectionReducer = (state, newSelection) =>
  new Set([newSelection])

export const multipleSelectionReducer = (state, newSelection) => {
  const newState = new Set([...state.selectedIndexes])

  if (state.selectedIndexes.has(newSelection)) {
    newState.delete(newSelection)
  } else {
    newState.add(newSelection)
  }

  return newState
}

class BaseSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    classNames: PropTypes.any.isRequired,
    /* selectedClassName: PropTypes.string, */
    selectedIndexes: PropTypes.arrayOf(PropTypes.number),
    disabledIndexes: PropTypes.arrayOf(PropTypes.number),
    onSelect: PropTypes.func,
    stateReducer: PropTypes.func
  }

  static defaultProps = {
    selectedIndexes: [],
    disabledIndexes: [],
    onSelect: () => {},
    stateReducer: () => {}
    /* selectedClassName: '' */
  }

  state = {
    selectedIndexes: new Set(this.props.selectedIndexes)
  }

  onClick = selectedIndex => {
    const { stateReducer, onSelect } = this.props
    this.setState(
      state => stateReducer(state, selectedIndex),
      () => onSelect(selectedIndex)
    )
  }

  render() {
    const { classNames, options, disabledIndexes } = this.props
    const { selectedIndexes } = this.state
    return options.map(option => {
      const content = option.content || option
      const key = option.key || option

      return (
        <button
          key={key}
          className={
            cx({
              [classNames.base]: true,
              [classNames.selected]: selectedIndexes.has(key),
              [classNames.disabled]: disabledIndexes.includes(key)
            })
            /* `${className} ${key === selectedIndex && */
            /* selectedClassName}` */
          }
          onClick={() => this.onClick(key)}
        >
          {content}
        </button>
      )
    })
  }
}

export default BaseSelect
