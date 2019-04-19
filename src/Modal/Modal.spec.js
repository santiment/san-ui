/* eslint-env jest */
import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import Button from './../Button'
import Modal from './Modal'

describe('Modal component', () => {
  let mockCb

  beforeEach(() => {
    mockCb = jest.fn()
  })

  it('smoke', () => {
    const wrapper = mount(
      <Modal trigger={<Button>Check</Button>}>
        {' '}
        <span>Any internal modal text</span>{' '}
      </Modal>
    )
    wrapper.find('button').simulate('click')
    const mountedText = wrapper.find('span')
    expect(mountedText.exists()).toBe(true)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
