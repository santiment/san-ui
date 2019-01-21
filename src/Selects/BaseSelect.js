import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './BaseSelect.module.scss'

export const toggleSingle = (state, newSelection) => [newSelection]

export const toggleMultiple = (state, newSelection) =>
  state.selectedIndexes.includes(newSelection)
    ? state.selectedIndexes.filter(index => index !== newSelection)
    : [...state.selectedIndexes, newSelection]

class BaseSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          index: PropTypes.any.isRequired,
          content: PropTypes.any.isRequired
        })
      ])
    ).isRequired,
    className: PropTypes.string.isRequired,
    selectedClassName: PropTypes.string.isRequired,
    disabledClassName: PropTypes.string.isRequired,
    defaultSelectedIndexes: PropTypes.arrayOf(PropTypes.any.isRequired),
    disabledIndexes: PropTypes.arrayOf(PropTypes.any.isRequired),
    onSelect: PropTypes.func,
    stateReducer: PropTypes.func.isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    fluid: PropTypes.bool
  }

  static defaultProps = {
    defaultSelectedIndexes: [],
    disabledIndexes: [],
    onSelect: () => {},
    as: 'div',
    fluid: false
  }

  state = {
    selectedIndexes: this.props.defaultSelectedIndexes
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
      disabledIndexes,
      fluid,
      as: SelectItem,
      // Destructing possible unnecessary props to access 'rest' props
      defaultSelectedIndexes,
      onSelect,
      stateReducer,
      // Destructing possible unnecessary props to access 'rest' props
      ...rest
    } = this.props
    const { selectedIndexes } = this.state

    return options.map(option => {
      const content = option.content || option
      const index = option.index || option
      const isDisabled = disabledIndexes.includes(index)

      return (
        <SelectItem
          {...rest}
          key={index}
          className={cx({
            [`${styles.wrapper} ${className}`]: true,
            [selectedClassName]: selectedIndexes.includes(index),
            [disabledClassName]: isDisabled,
            [styles.fluid]: fluid
          })}
          onClick={isDisabled ? undefined : () => this.onClick(index)}
        >
          {content}
        </SelectItem>
      )
    })
  }
}

export default BaseSelect
