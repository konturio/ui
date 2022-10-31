export interface TimelineEntry {
  id: string | number;
  start: Date;
  end?: Date;
  tooltip?: string;
  group?: string;
}

interface ClusterOptions {
  fitOnDoubleClick: boolean;
}

export type TimelineEntryComponent = (data: {
  content: string;
  isCluster: boolean;
  isSelected: boolean;
  end: null | Date;
  start: Date;
}) => JSX.Element;

export type TimelineTooltipComponent = (props: unknown) => JSX.Element;
export interface TimelineProps {
  dataset: TimelineEntry[];
  selected: TimelineEntry['id'][];
  /* Show overlapped entries as stack */
  stack: boolean;
  /* Join bunch of small entries in cluster */
  cluster: false | ClusterOptions;
  tooltipComponent?: TimelineTooltipComponent;
  timelineEntryComponent?: TimelineEntryComponent;
  onSelect?: (item: TimelineEntry[], event: PointerEvent) => void;
  onHover?: (item: TimelineEntry[], event: PointerEvent) => void;
}

export interface TimelineImperativeApi {
  fit: () => void;
}

export type TimelineOptions = Omit<TimelineProps, 'dataset' | 'selected'>;
