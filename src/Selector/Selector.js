import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Selector.module.scss'

export const SelectorItem = ({
  isSelected = false,
  value = 'all',
  name = 'all',
  setFilter,
  disabled = false
}) => (
  <div
    className={cx({
      [styles['btn']]: true,
      [styles['selected']]: isSelected,
      [styles['disabled']]: disabled
    })}
    onClick={() => !disabled && setFilter(value)}
  >
    {name}
  </div>
)

export class Selector extends Component {
  state = {
    selected: this.props.defaultSelected
  }

  static defaultProps = {
    defaultSelected: undefined,
    options: [],
    disabled: false,
    className: ''
  }

  static propTypes = {
    defaultSelected: PropTypes.string,
    options: PropTypes.array,
    onSelectOption: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['border'])
  }

  onSelectOption = newOption => {
    this.setState({ selected: newOption }, () => {
      this.props.onSelectOption(newOption)
    })
  }

  render() {
    const { selected } = this.state
    const {
      variant,
      options,
      nameOptions = options,
      disabled,
      className
    } = this.props

    return (
      <div
        className={cx({
          [styles.wrapper]: true,
          [className]: !!className,
          [styles[variant]]: !!variant
        })}
      >
        {options.map((option, index) => (
          <SelectorItem
            key={option}
            name={nameOptions[index]}
            isSelected={selected === option}
            value={option}
            setFilter={this.onSelectOption}
            disabled={disabled}
          />
        ))}
      </div>
    )
  }
}

export default Selector
