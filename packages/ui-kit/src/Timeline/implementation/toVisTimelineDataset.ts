import type { DataItem } from 'vis-timeline';
import type { TimelineEntry } from '../types';

export const toVisTimelineDataset = (e: TimelineEntry): DataItem => ({
  id: e.id,
  start: e.start,
  end: e.end,
  content: '',
});
