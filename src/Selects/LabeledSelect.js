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
    options={options.map(option => {
      const content = option.content || option
      const index = option.index || option

      return {
        index,
        content: (
          <>
            <span className={`${styles.label} ${labelClassName}`}>
              {content}
            </span>
            {selectElement}
          </>
        )
      }
    })}
    className={`${className} ${labelOnRight ? styles.right : ''}`}
    {...props}
  />
)

LabeledSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        index: PropTypes.any.isRequired,
        content: PropTypes.any.isRequired
      })
    ])
  ).isRequired,
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
