import React from 'react'
import LabeledSelector from './LabeledSelect'
import { toggleSingle } from './BaseSelect'
/* import styles from './RadioBtns.module.scss' */

const ContentContainer = () => <div />

const RadioBtns = ({ options, className, ...props }) => (
  <LabeledSelector
    labels={options}
    selectElement={<ContentContainer />}
    className={`${className} `}
    selectedClassName=''
    disabledClassName=''
    stateReducer={toggleSingle}
    {...props}
  />
)

export default RadioBtns
