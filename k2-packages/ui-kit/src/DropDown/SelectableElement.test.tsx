import React from 'react';
import SelectableElement from './SelectableElement';
import { shallow } from 'enzyme';
import style from './style.styl';

describe('<SelectableElement> component', () => {
  it('Should call `onChange` on changes', () => {
    const onChange = jest.fn()
    const wrapper = shallow(
      <SelectableElement
        id="foo"
        value="bar"
        onChange={onChange}
      >
        Here can be your ad
      </SelectableElement>
    );
    wrapper.find('input').simulate('change', {})
    expect(onChange).toBeCalled();
  });

  it('Should add className if selected', () => {
    const wrapper = shallow(
      <SelectableElement
        id="foo"
        value="bar"
        onChange={() => {}}
        isSelected={true}
      >
        Here can be your ad
      </SelectableElement>
    );

    expect(wrapper.hasClass(style.selected)).toBe(true);
  });

  it('Should render Badge', () => {
    const badgeId = "badge"
    const wrapper = shallow(
      <SelectableElement
        id="foo"
        value="bar"
        onChange={() => {}}
        badge={<div id={badgeId}> Badge! </div>}
      >
        Here can be your ad
      </SelectableElement>
    );

    expect(wrapper.find('label').exists(`#${badgeId}`)).toBe(true);
  });
});
