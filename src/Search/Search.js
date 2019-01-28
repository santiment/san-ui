import React from 'react'
import { InputWithIcon } from '../Input'

const Search = props => {
  return (
    <InputWithIcon
      icon='search-small'
      placeholder='Type to search...'
      {...props}
    />
  )
}

export default Search
