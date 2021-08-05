import { render, shallow } from 'enzyme';
import { Radio } from './index';

describe('<Checkbox /> component', () => {
  it('Should render without errors', () => {
    render(<Radio id="test" />);
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
    const wrapper = shallow(<Radio {...mockProps} />);
    const input = wrapper.find('input');
    expect(input.props()).toEqual({
      ...mockProps,
      className: 'checkbox ' + mockProps.className,
    });
  });
});
