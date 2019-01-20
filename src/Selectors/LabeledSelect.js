import React from 'react'
import PropTypes from 'prop-types'
import BaseSelect from './BaseSelect'
import styles from './LabeledSelect.module.scss'

const LabeledSelector = ({
  labels,
  labelOnRight,
  selectElement,
  className,
  ...props
}) => (
  <BaseSelect
    options={labels.map(label => ({
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
  className: PropTypes.string
}

LabeledSelector.defaultProps = {
  className: ''
}

export default LabeledSelector
