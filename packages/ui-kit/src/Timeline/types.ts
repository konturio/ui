import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TooltipProps } from '../Tooltip/Tooltip/Tooltip';

export interface TimelineEntry {
  id: string | number;
  start: Date;
  end?: Date;
  group?: string;
}

interface ClusterOptions {
  fitOnDoubleClick: boolean;
}

export type TooltipEntry =
  | TimelineEntry
  | { id: string | number; isCluster: true; items: TimelineEntry[]; start: Date; end?: Date; selected: boolean };

export type EntryTooltipProps = { entry: TimelineEntry } & TooltipProps;
export type TimelineTooltipComponent = (props: Exclude<EntryTooltipProps, 'hoverBehavior'>) => JSX.Element;

export interface TimelineProps {
  dataset: TimelineEntry[];
  selected: TimelineEntry['id'][];
  /* Show overlapped entries as stack */
  stack: boolean;
  /* Join bunch of small entries in cluster */
  cluster: false | ClusterOptions;
  timelineEntryClassName?: string;
  getClusterClassName?: (cluster: TimelineEntry[]) => string;
  onSelect?: (item: TimelineEntry[], event: PointerEvent) => void;
  onHover?: (item: TimelineEntry[], event: PointerEvent) => void;
  margin?: VisTimelineOptions['margin'];
  tooltipComponent?: TimelineTooltipComponent;
}

export interface TimelineImperativeApi {
  fit: () => void;
}

export type TimelineOptions = Omit<TimelineProps, 'dataset' | 'selected'>;
