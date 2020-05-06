import { render, shallow } from 'enzyme';
import React from 'react';
import Checkbox from './index';

describe('<Checkbox /> component', () => {
  it('Should render without errors', () => {
    render(<Checkbox />);
  });

  it('Should render with props', () => {
    const mockOnChange = jest.fn();
    const mockProps = {
      id: '123',
      name: 'foo',
      type: 'checkbox',
      value: 'bar',
      readOnly: true,
      className: 'abc',
      disabled: true,
      checked: true,
      required: true,
      onChange: mockOnChange,
    };
    const wrapper = shallow(<Checkbox {...mockProps} />);
    const input = wrapper.find('input');
    expect(input.props()).toEqual({
      ...mockProps,
      className: 'checkbox ' + mockProps.className,
    });
  });
});
