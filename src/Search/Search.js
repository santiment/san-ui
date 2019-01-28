import React from 'react'
import { InputWithIcon } from '../Input'
import styles from './Search.module.scss'

const Search = props => {
  return (
    <InputWithIcon
      icon='search-small'
      iconClassName={styles.icon}
      placeholder='Type to search...'
      {...props}
    />
  )
}

export default Search
