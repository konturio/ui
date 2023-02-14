import type { DataItem } from 'vis-timeline';
import type { TimelineEntry } from '../../types';

export const toVisTimelineDataset = (e: TimelineEntry): DataItem => {
  return {
    ...e,
    content: e.content ?? '',
  };
};
