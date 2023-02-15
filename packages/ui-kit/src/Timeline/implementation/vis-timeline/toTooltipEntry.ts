import type { TimelineEntry, TooltipEntry } from '../../types';

export const toTooltipEntry = <T extends TimelineEntry>(entry): TooltipEntry<T> => {
  if (entry.isCluster) {
    return {
      id: entry.id,
      isCluster: true,
      items: entry.data.items,
      start: entry.data.start,
      end: entry.data.end,
      selected: entry.selected,
      content: entry.content,
    };
  }
  return entry;
};
