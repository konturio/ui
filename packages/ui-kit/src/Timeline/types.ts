import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TooltipProps } from '../Tooltip/types';

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

export interface EntryTooltipProps<T extends TimelineEntry> extends TooltipProps {
  entry: TooltipEntry<T>;
}
export type TimelineTooltipComponent<T extends TimelineEntry> = (
  props: Exclude<EntryTooltipProps<T>, 'hoverBehavior'>,
) => JSX.Element;

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
  tooltipComponent?: TimelineTooltipComponent<T>;
}

export interface TimelineProps<T extends TimelineEntry> extends TimelineOptions<T> {
  dataset: T[];
  selected: T['id'][];
}

export interface TimelineImperativeApi {
  fit: () => void;
}
