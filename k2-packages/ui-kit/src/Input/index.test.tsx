import React from 'react';
import Input from './index';
import { shallow, mount } from 'enzyme';
import s from './style.module.css';

describe('<Input> component', () => {
  it('Call onChange callback', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Input onChange={onChange} />);
    wrapper.find('input').simulate('change', {});
    expect(onChange).toBeCalled();
  });

  it('Call onFocus callback', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(<Input onFocus={onFocus} />);
    wrapper.find('input').simulate('focus', {});
    expect(onFocus).toBeCalled();
  });

  it('Call onBlur callback', () => {
    const onBlur = jest.fn();
    const wrapper = shallow(<Input onBlur={onBlur} />);
    wrapper.find('input').simulate('blur', {});
    expect(onBlur).toBeCalled();
  });

  it('Call onType callback', () => {
    const onType = jest.fn();
    const expectedValue = 'x';
    const wrapper = shallow(<Input onType={onType} />);
    wrapper.find('input').simulate('change', {
      target: {
        value: expectedValue,
      },
    });
    expect(onType).toBeCalledWith(expectedValue);
  });

  it('Set focus state and call onFocus when isFocused true', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(<Input isFocused={false} onFocus={onFocus} ref={{ current: null }} />);
    wrapper.setProps({ isFocused: true });
    expect(wrapper.hasClass(s.focus)).toBe(true);
    setTimeout(() => expect(onFocus).toBeCalled(), 250);
  });

  it('Remove focus state and call onBlur when isFocused false', () => {
    const onBlur = jest.fn();
    const wrapper = shallow(<Input isFocused={true} onBlur={onBlur} ref={{ current: null }} />);
    wrapper.setProps({ isFocused: false });
    expect(wrapper.hasClass(s.focus)).toBe(false);
    setTimeout(() => expect(onBlur).toBeCalled(), 250);
  });

  it('Not crush if ref not provided', () => {
    const wrapper = shallow(<Input isFocused={true} />);
    wrapper.setProps({ isFocused: false });
  });

  it('Not crush if ref provided without blur method', () => {
    const wrapper = mount(
      <Input
        isFocused={false}
        ref={{
          current: {
            focus: () => {
              /* do nothing */
            },
          },
        }}
      />,
    );
    wrapper.setProps({ isFocused: true });
  });

  it('Not crush if ref provided without focus method', () => {
    const wrapper = mount(
      <Input
        isFocused={true}
        ref={{
          current: {
            blur: () => {
              /* do nothing */
            },
          },
        }}
      />,
    );
    wrapper.setProps({ isFocused: false });
  });

  it('Show message', () => {
    const wrapper = shallow(<Input message="Hello world" ref={{ current: null }} />);
    expect(wrapper.find(`.${s.message}`).text()).toBe('Hello world');
  });
});
