import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TooltipProps } from '../Tooltip/types';

export interface TimelineEntry {
  id: string | number;
  start: Date;
  end?: Date;
  group?: string;
  selected?: boolean;
}

export interface TimelineCluster extends TimelineEntry {
  isCluster: true;
  items: TimelineEntry[];
}

interface ClusterOptions {
  fitOnDoubleClick: boolean;
}

export type TooltipEntry = TimelineEntry | TimelineCluster;

export type EntryTooltipProps = { entry: TimelineEntry } & TooltipProps;
export type TimelineTooltipComponent = (props: Exclude<EntryTooltipProps, 'hoverBehavior'>) => JSX.Element;

export interface TimelineProps<T extends TimelineEntry = TimelineEntry> {
  dataset: T[];
  selected: T['id'][];
  /* Show overlapped entries as stack */
  stack: boolean;
  /* Join bunch of small entries in cluster */
  cluster: false | ClusterOptions;
  getEntryClassName?: (item: T) => string;
  getClusterClassName?: (cluster: T[]) => string;
  onSelect?: (item: T[], event: PointerEvent) => void;
  onHover?: (item: T[], event: PointerEvent) => void;
  margin?: VisTimelineOptions['margin'];
  tooltipComponent?: TimelineTooltipComponent;
}

export interface TimelineImperativeApi {
  fit: () => void;
}

export type TimelineOptions = Omit<TimelineProps, 'dataset' | 'selected'>;
