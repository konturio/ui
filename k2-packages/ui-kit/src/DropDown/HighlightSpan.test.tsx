import React from 'react';
import { HighlightSpan } from './HighlightSpan';
import { shallow } from 'enzyme';
import s from './style.module.css';

describe('<HighlightSpan> component', () => {
  it('Should highlight text', () => {
    const text = 'Some';
    const wrapper = shallow(<HighlightSpan highlight={text}> Some Text Some Text</HighlightSpan>);

    expect(wrapper.find(`.${s.highlight}`)).toHaveLength(2);

    expect(wrapper.find(`.${s.highlight}`).last().text()).toEqual(text);
  });

  it('Highlight not crush when prop not set', () => {
    const text = '[\\^$.|?*+()';
    shallow(<HighlightSpan>{text}</HighlightSpan>);
  });

  it('Escape special chars', () => {
    const text = '[\\^$.|?*+()';
    const wrapper = shallow(<HighlightSpan highlight={text}>{text}</HighlightSpan>);
    expect(wrapper.find(`.${s.highlight}`).text()).toEqual(text);
  });

  test.todo('Fix Escape special chars test');
  // it('Escape special chars', () => {
  //   const text = 'Some Capitalized Text';
  //   const wrapper = shallow(
  //     <HighlightSpan highlight={text.toLowerCase()}>{text}</HighlightSpan>
  //   );

  //   expect(
  //     wrapper.find(`.${s.highlight}`).text()
  //   ).toEqual(text)
  // });
});
