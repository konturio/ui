import React from 'react';
import LanguageSelect from './index';
import { render, shallow } from 'enzyme';

describe('<LanguageSelect> component', () => {
  it('Should render without errors', () => {
    render(<LanguageSelect languages={['en', 'ru']} onClick={jest.fn} />);
  });

  it('Should render options to select', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<LanguageSelect languages={['en', 'ru']} onClick={onClick} />);
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('Should call `onClick` on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<LanguageSelect languages={['en', 'ru']} onClick={onClick} />);
    wrapper.find('button').at(1).simulate('click', {});
    expect(onClick).toBeCalled();
  });
});
