import React from 'react';
import Card from './index';
import { shallow } from 'enzyme';

describe('<Card> component ', () => {
  it('Should render h3 title if title prop truly', () => {
    const wrapper = shallow(<Card title="Header">Some Text Some Text</Card>);
    expect(wrapper.exists('h3')).toBe(true);
  });
});
