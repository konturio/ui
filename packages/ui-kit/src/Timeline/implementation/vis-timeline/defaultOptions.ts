import type { TimelineOptions } from 'vis-timeline';

export const getDefaultOptions = (): TimelineOptions => ({
  margin: {
    axis: 17,
    item: {
      horizontal: 14,
      vertical: 14,
    },
  },
  template: (item: unknown, el: Element, data) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('vis-item-default-template');
    return wrapper;
  },
});
