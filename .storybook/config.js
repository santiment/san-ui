import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'

// addon-info
setDefaults({
  header: false
})

addDecorator(withInfo)
addDecorator(story => <div style={{ padding: '1em' }}>{story()}</div>)

function loadStories () {
  require('../stories/index.js')
}

configure(loadStories, module)
