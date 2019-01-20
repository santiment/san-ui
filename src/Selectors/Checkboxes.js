import React from 'react'
import LabeledSelector from './LabeledSelect'
import { toggleMultiple } from './BaseSelect'
/* import styles from './Checkboxes.module.scss' */

const ContentContainer = () => <div />

const Checkboxes = ({ options, className, ...props }) => (
  <LabeledSelector
    labels={options}
    selectElement={<ContentContainer />}
    className={`${className} `}
    selectedClassName=''
    disabledClassName=''
    stateReducer={toggleMultiple}
    {...props}
  />
)

export default Checkboxes
