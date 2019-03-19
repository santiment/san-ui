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
      <Modal
        trigger={<Button>Check</Button>}
        title='Any title'
        onConfirmClick={mockCb}
      >
        Any internal modal text
      </Modal>
    )
    wrapper.find('button').simulate('click')
    const actions = wrapper.find('ModalActions')
    expect(actions.exists()).toBe(true)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should have right title', () => {
    const wrapper = mount(
      <Modal
        trigger={<Button>Check</Button>}
        title='Any title'
        showDefaultActions={false}
        onConfirmClick={mockCb}
      >
        Any internal modal text
      </Modal>
    )

    wrapper.find('button').simulate('click')
    const title = wrapper.find('.title').text()
    expect(title).toBe('Any title')
  })

  it("should don't have default actions, if pass showDefaultActions = false", () => {
    const wrapper = mount(
      <Modal
        trigger={<Button>Check</Button>}
        title='Any title'
        showDefaultActions={false}
      >
        Any internal modal text
      </Modal>
    )

    wrapper.find('button').simulate('click')
    const actions = wrapper.find('ModalActions')
    expect(actions.exists()).toBe(false)
  })
})
