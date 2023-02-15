import { getDefaultEntry, getDefaultOptions } from './defaultOptions';
import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TimelineCluster, TimelineEntry, TimelineOptions } from '../../types';

export function toVisTimelineOptions<T extends TimelineEntry>(options: TimelineOptions<T>): VisTimelineOptions {
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
  timelineOptions.template = (item: T, el: Element, data: T & TimelineCluster<T>) => {
    const entry = getDefaultEntry();
    const defaultClassName = 'timeline-item';
    if (getEntryClassName) {
      const classNames = getEntryClassName(item, defaultClassName);
      if (typeof classNames === 'string' && classNames.length > 0) {
        classNames.split(' ').forEach((cn) => {
          entry.classList.add(cn);
        });
      }
    } else {
      entry.classList.add(defaultClassName);
    }

    if (data.isCluster && getClusterClassName) {
      const clusterClassName = getClusterClassName(data.items);
      if (typeof clusterClassName === 'string' && clusterClassName.length > 0) {
        clusterClassName.split(' ').forEach((cn) => {
          entry.classList.add(cn);
        });
      }
    }

    return entry;
  };

  if (options.margin !== undefined) {
    timelineOptions.margin = options.margin;
  }

  return timelineOptions;
}
