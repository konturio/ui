import { getDefaultEntry, getDefaultOptions } from './defaultOptions';
import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TimelineOptions } from '../../types';

export const toVisTimelineOptions = (options: TimelineOptions): VisTimelineOptions => {
  const timelineOptions: VisTimelineOptions = {
    ...getDefaultOptions(),
    stack: options.stack,
  };

  if (options.cluster) {
    timelineOptions.cluster = options.cluster;
    if (timelineOptions.cluster.titleTemplate === undefined) {
      timelineOptions.cluster.titleTemplate = '';
      // https://github.com/visjs/vis-timeline/issues/1543
      // @ts-expect-error - this property added by patch package
      timelineOptions.cluster.contentTemplate = () => '';
    }
  }

  const { timelineEntryClassName, getClusterClassName } = options;
  if (timelineEntryClassName || getClusterClassName) {
    timelineOptions.template = (item: unknown, el: Element, data: any) => {
      const entry = getDefaultEntry();

      if (timelineEntryClassName) {
        entry.classList.add(timelineEntryClassName);
      }

      if (data.isCluster && getClusterClassName) {
        const clusterClassName = getClusterClassName(data.items);
        entry.classList.add(clusterClassName);
      }

      return entry;
    };
  }

  if (typeof options.margin !== 'undefined') {
    timelineOptions.margin = options.margin;
  }

  return timelineOptions;
};
