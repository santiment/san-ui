import React, { useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Lib, { DropdownItem } from '../src/Dropdown'
import ColorModeComparison from './ColorModeComparison'

const Dropdown = ({ selected, onSelect, options, ...props }) => {
  const [_selected, setSelected] = useState(selected)
  console.log(_selected)

  function _onSelect (option) {
    setSelected(option)
    onSelect(option)
  }

  return (
    <Lib
      onSelect={_onSelect}
      {...props}
      options={options}
      selected={_selected}
    />
  )
}

storiesOf('Dropdown', module)
  .addParameters({
    info: {
      propTables: [Lib],
      propTablesExclude: [Dropdown]
    }
  })
  .add('Default', () => {
    return (
      <ColorModeComparison>
        <Dropdown
          options={['123', 'aaa', 'bb']}
          selected='123'
          onSelect={action('Selected')}
          style={{
            width: 200
          }}
        />
      </ColorModeComparison>
    )
  })
  .add('Virtualized', () => {
    const options = new Array(500).fill(null).map((_, i) => i)

    function Row ({ index, style }) {
      return (
        <DropdownItem
          option={options[index]}
          style={style}
          onSelect={action('Selected')}
        >
          {options[index]}
        </DropdownItem>
      )
    }

    return (
      <ColorModeComparison>
        <Dropdown
          options={options}
          selected={1}
          style={{
            width: 200
          }}
        >
          <List height={150} itemSize={32} itemCount={options.length}>
            {Row}
          </List>
        </Dropdown>
      </ColorModeComparison>
    )
  })
