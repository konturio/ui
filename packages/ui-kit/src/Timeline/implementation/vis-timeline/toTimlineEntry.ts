import type { FullItem } from 'vis-data/declarations/data-interface';
import type { DataItem } from 'vis-timeline';
import type { TimelineEntry } from '../../types';

export function toTimelineEntry<T extends TimelineEntry>(visItem: FullItem<DataItem, 'id'>): T {
  const start = new Date(visItem.start);
  const end = visItem.end === undefined ? visItem.end : new Date(visItem.end);
  return {
    ...visItem,
    start,
    end,
  } as T;
}
