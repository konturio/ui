import type { TimelineOptions } from 'vis-timeline';

export const getDefaultOptions = (): TimelineOptions => ({
  margin: {
    axis: 17,
    item: {
      horizontal: 14,
      vertical: 14,
    },
  },
});
