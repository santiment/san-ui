import React from 'react'
import PropTypes from 'prop-types'
import BaseSelect from './BaseSelect'
import styles from './LabeledSelect.module.scss'

const LabeledSelector = ({
  options,
  labelOnRight,
  selectElement,
  className,
  ...props
}) => (
  <BaseSelect
    options={options.map(label => ({
      index: label,
      content: (
        <>
          {label}
          {selectElement}
        </>
      )
    }))}
    className={`${className} ${labelOnRight ? styles.right : ''}`}
    {...props}
  />
)

LabeledSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectElement: PropTypes.element.isRequired,
  className: PropTypes.string,
  labelOnRight: PropTypes.bool
}

LabeledSelector.defaultProps = {
  className: '',
  labelOnRight: false
}

export default LabeledSelector
