import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('render', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#app').exists()).toBeTruthy()
  })
})
