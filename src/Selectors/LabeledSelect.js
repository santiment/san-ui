import React from 'react'
import BaseSelect from './BaseSelect'
import styles from './LabeledSelect.module.scss'

const LabeledSelector = ({
  labels,
  labelOnRight,
  container: Container,
  className = '',
  ...props
}) => (
  <BaseSelect
    options={labels.map(label => ({
      index: label,
      content: <Container label={label} />
    }))}
    className={`${className} ${labelOnRight ? styles.right : ''}`}
    {...props}
  />
)

export default LabeledSelector
