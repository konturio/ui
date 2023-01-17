import type { TimelineOptions } from 'vis-timeline';

export const getDefaultEntry = () => {
  const entry = document.createElement('div');
  return entry;
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
