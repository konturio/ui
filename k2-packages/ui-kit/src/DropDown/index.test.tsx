import { DropDown } from './index';
import { SelectableElement } from './SelectableElement';
import { HighlightSpan } from './HighlightSpan';

import { shallow } from 'enzyme';

describe('<DropDown> component', () => {
  it('Should render dropdown items', () => {
    const wrapper = shallow(
      <DropDown
        options={[
          { label: 'foo', value: 1 },
          { label: 'bar', value: '2' },
        ]}
        onChange={(e) => console.log(e)}
      />,
    );

    expect(wrapper.find(SelectableElement)).toHaveLength(2);
  });

  it('Should call `onChange` on changes', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DropDown
        options={[
          { label: 'foo', value: 1 },
          { label: 'bar', value: '2' },
        ]}
        onChange={onChange}
      />,
    );
    wrapper.find(SelectableElement).first().simulate('change', {});
    expect(onChange).toBeCalled();
  });

  it('Should mark selected item', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DropDown
        options={[
          { label: 'foo', value: 1 },
          { label: 'bar', value: '2' },
        ]}
        selected={'2'}
        onChange={onChange}
      />,
    );

    expect(wrapper.childAt(0).prop('isSelected')).toBe(false);
    expect(wrapper.childAt(1).prop('isSelected')).toBe(true);
  });

  it('Should not pass badge to items with index more that 8', () => {
    const wrapper = shallow(
      <DropDown
        options={new Array(10).fill(0).map((_, i) => ({
          label: 'foo' + i,
          value: i,
        }))}
        onChange={(e) => console.log(e)}
      />,
    );

    expect(wrapper.childAt(9).prop('badge')).toBe(undefined);
  });

  it('Should use <HighlightSpan /> if highlightText provided', () => {
    const wrapper = shallow(
      <DropDown
        highlightText={'foo'}
        options={[
          { label: 'foo', value: 1 },
          { label: 'bar', value: '2' },
        ]}
        onChange={(e) => console.log(e)}
      />,
    );

    expect(wrapper.exists(HighlightSpan)).toBe(true);
  });
});
