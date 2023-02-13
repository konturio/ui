import { getDefaultEntry, getDefaultOptions } from './defaultOptions';
import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TimelineCluster, TimelineEntry, TimelineOptions } from '../../types';

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

  const { getEntryClassName, getClusterClassName } = options;
  if (getEntryClassName || getClusterClassName) {
    timelineOptions.template = (item: TimelineEntry, el: Element, data: TimelineCluster) => {
      const entry = getDefaultEntry();

      if (getEntryClassName) {
        entry.classList.add(getEntryClassName(item));
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
