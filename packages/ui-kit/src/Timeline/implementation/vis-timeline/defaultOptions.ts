import type { TimelineOptions } from 'vis-timeline';

export const getDefaultEntry = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('vis-item-default');
  return wrapper;
};

export const getDefaultOptions = (): TimelineOptions => ({
  margin: {
    axis: 17,
    item: {
      horizontal: 14,
      vertical: 14,
    },
  },
  template: getDefaultEntry,
});
