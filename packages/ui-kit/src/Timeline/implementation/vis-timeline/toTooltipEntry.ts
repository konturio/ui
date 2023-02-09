import type { TooltipEntry } from '../../types';

export const toTooltipEntry = (entry): TooltipEntry => {
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
