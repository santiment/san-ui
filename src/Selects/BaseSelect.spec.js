/* eslint-env jest */
import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import BaseSelect, { toggleSingle, toggleMultiple } from './BaseSelect'

const defaultOptions = ['1w', '1m', '3m', '6m', '1y', 'all']
const simpleReducer = (state, newSelection) => [newSelection]
const classNames = {
  className: '',
  selectedClassName: '',
  disabledClassName: ''
}

describe('BaseSelect component', () => {
  let mockCb

  beforeEach(() => {
    mockCb = jest.fn()
  })

  it('smoke', () => {
    const wrapper = shallow(
      <BaseSelect
        stateReducer={simpleReducer}
        options={defaultOptions}
        onSelect={mockCb}
        {...classNames}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should call onSelect when option is clicked', () => {
    const wrapper = mount(
      <BaseSelect
        stateReducer={simpleReducer}
        options={defaultOptions}
        onSelect={mockCb}
        {...classNames}
      />
    )

    wrapper
      .find('div')
      .at(2)
      .simulate('click')
    expect(mockCb).toHaveBeenCalled()
  })

  it('should contain selected option specified by the default', () => {
    const wrapper = mount(
      <BaseSelect
        stateReducer={simpleReducer}
        options={defaultOptions}
        onSelect={mockCb}
        defaultSelectedIndexes={defaultOptions.slice(0, 1)}
        {...classNames}
      />
    )

    expect(wrapper.state().selectedIndexes).toEqual(defaultOptions.slice(0, 1))
  })

  describe('toggleSingle state reducer', () => {
    it('should update state with clicked option', () => {
      const wrapper = mount(
        <BaseSelect
          stateReducer={toggleSingle}
          options={defaultOptions}
          onSelect={mockCb}
          {...classNames}
        />
      )
      const CLICKED_OPTION_INDEX = 3

      wrapper
        .find('div')
        .at(CLICKED_OPTION_INDEX)
        .simulate('click')

      expect(wrapper.state().selectedIndexes).toEqual(
        defaultOptions.slice(CLICKED_OPTION_INDEX, CLICKED_OPTION_INDEX + 1)
      )
    })

    it('state should contain only 1 last selected option after multiple clicks', () => {
      const wrapper = mount(
        <BaseSelect
          stateReducer={toggleSingle}
          options={defaultOptions}
          onSelect={mockCb}
          {...classNames}
        />
      )
      const OPTIONS_INDEX_CLICK_SEQUENCE = [1, 4, 3]
      const LAST_CLICKED_INDEX =
        OPTIONS_INDEX_CLICK_SEQUENCE[OPTIONS_INDEX_CLICK_SEQUENCE.length - 1]

      OPTIONS_INDEX_CLICK_SEQUENCE.forEach(index =>
        wrapper
          .find('div')
          .at(index)
          .simulate('click')
      )

      expect(wrapper.state().selectedIndexes).toEqual(
        defaultOptions.slice(LAST_CLICKED_INDEX, LAST_CLICKED_INDEX + 1)
      )
    })
  })

  describe('toggleMultiple state reducer', () => {
    it('should update state with clicked option', () => {
      const wrapper = mount(
        <BaseSelect
          stateReducer={toggleMultiple}
          options={defaultOptions}
          onSelect={mockCb}
          {...classNames}
        />
      )
      const CLICKED_OPTION_INDEX = 3

      wrapper
        .find('div')
        .at(CLICKED_OPTION_INDEX)
        .simulate('click')

      expect(wrapper.state().selectedIndexes).toEqual(
        defaultOptions.slice(CLICKED_OPTION_INDEX, CLICKED_OPTION_INDEX + 1)
      )
    })

    it('state should contain all selected options after multiple clicks', () => {
      const wrapper = mount(
        <BaseSelect
          stateReducer={toggleMultiple}
          options={defaultOptions}
          onSelect={mockCb}
          {...classNames}
        />
      )
      const OPTIONS_INDEX_CLICK_SEQUENCE = [1, 4, 3]

      OPTIONS_INDEX_CLICK_SEQUENCE.forEach(index =>
        wrapper
          .find('div')
          .at(index)
          .simulate('click')
      )

      expect(wrapper.state().selectedIndexes).toEqual(
        OPTIONS_INDEX_CLICK_SEQUENCE.map(index => defaultOptions[index])
      )
    })
  })
})
