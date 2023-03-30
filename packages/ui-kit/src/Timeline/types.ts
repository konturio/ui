import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';

export interface TimelineEntry {
  id: string | number;
  content?: string;
  start: Date;
  end?: Date;
  group?: string;
  selected?: boolean;
}

export interface TimelineCluster<T extends TimelineEntry> {
  isCluster: true;
  items: T[];
}

interface ClusterOptions {
  fitOnDoubleClick: boolean;
}

export type TooltipEntry<T extends TimelineEntry> = TimelineEntry | TimelineCluster<T>;

export interface TimelineOptions<T extends TimelineEntry> {
  /* Show overlapped entries as stack */
  stack: boolean;
  /* Join bunch of small entries in cluster */
  cluster: false | ClusterOptions;
  onSelect?: (item: T[], event: PointerEvent) => void;
  onHover?: (item: T[], event: PointerEvent) => void;
  margin?: VisTimelineOptions['margin'];
  getEntryClassName?: (item: T, defaultClassName?: string) => string | undefined;
  getClusterClassName?: (cluster: T[]) => string | undefined;
  getTooltipText?: (entry: TooltipEntry<T>) => string;
}

export interface TimelineProps<T extends TimelineEntry> extends TimelineOptions<T> {
  dataset: T[];
  selected: T['id'][];
}

export interface TimelineImperativeApi {
  fit: () => void;
}

export const isTimelineEntry = <T extends TimelineEntry>(
  entry: TimelineEntry | TimelineCluster<T>,
): entry is TimelineEntry => {
  return (entry as TimelineEntry).id !== undefined;
};

export const isTimelineCluster = <T extends TimelineEntry>(
  entry: TimelineEntry | TimelineCluster<T>,
): entry is TimelineCluster<T> => {
  return (entry as TimelineCluster<T>).isCluster === true;
};
