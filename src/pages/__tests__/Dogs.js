import React from 'react';
import ReactDom from 'react-dom';
import Dogs from '../Dogs';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const dogs = [
  {
    id: 1,
    name: 'Mika',
    age: 1,
    enjoys: 'Acting crazy!'
  },
  {
    id: 2,
    name: 'Leo',
    age: 9,
    enjoys: 'Being harassed by Mika.'
  },
  {
    id: 3,
    name: 'Cruiser',
    age: 0,
    enjoys: 'Cruising the house.'
  }
]

it('Dog renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Dogs dogs= {dogs} />, div)
})

it('Renders the dogs', () => {
  const component = mount(<Dogs dogs = {dogs} />)
  const headings = component.find('h4 > .dog-name')
  expect(headings.length).toBe(3)
})
