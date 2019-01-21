import React from 'react'
import PropTypes from 'prop-types'
import BaseSelect from './BaseSelect'
import styles from './LabeledSelect.module.scss'

const LabeledSelect = ({
  options,
  labelOnRight,
  selectElement,
  className,
  labelClassName,
  ...props
}) => (
  <BaseSelect
    options={options.map(label => ({
      index: label,
      content: (
        <>
          <span className={`${styles.label} ${labelClassName}`}>{label}</span>
          {selectElement}
        </>
      )
    }))}
    className={`${className} ${labelOnRight ? styles.right : ''}`}
    {...props}
  />
)

LabeledSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectElement: PropTypes.element.isRequired,
  labelOnRight: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string
}

LabeledSelect.defaultProps = {
  labelOnRight: false,
  className: '',
  labelClassName: ''
}

export default LabeledSelect
