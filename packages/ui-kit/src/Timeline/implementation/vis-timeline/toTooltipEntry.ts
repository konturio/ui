import type { TolltipEntry } from '../../types';

export const toTooltipEntry = (entry): TolltipEntry => {
  if (entry.isCluster) {
    return {
      id: entry.id,
      isCluster: true,
      items: entry.data.items,
      start: entry.data.start,
      end: entry.data.end,
      selected: entry.selected,
    };
  }
  return entry;
};
