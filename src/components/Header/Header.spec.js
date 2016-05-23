import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import Nav from '../Nav/Nav'
import test from 'ava'

test('Header', (t) => {
  const rendered = shallow(<Header name='Peter' logout={() => {}} loggedIn={true} />)
  t.is(rendered.find('h1').text(), ' Peter ')
  t.is(rendered.find('.header__logo').length, 1)
  t.is(rendered.find(Nav).length, 1)
})
