import type { TimelineItem } from 'vis-timeline';

export interface TimelineEntry {
  id: string | number;
  start: Date;
  tooltip?: string;
  end?: Date;
  group?: string;
}

export interface TimelineOptions {
  /* Show overlapped entries as stack */
  stack: boolean;
  /* Join bunch of small entries in cluster */
  cluster:
    | boolean
    | {
        fitOnDoubleClick: boolean;
      };
  tooltipComponent?: ({
    originalItemData,
    parsedItemData,
  }: {
    originalItemData: TimelineItem;
    parsedItemData?: TimelineItem;
  }) => JSX.Element;
  timelineEntryComponent?: (data: {
    content: string;
    isCluster: boolean;
    end: null | Date;
    start: Date;
  }) => JSX.Element;
  onSelect?: (item: TimelineEntry[], event: PointerEvent) => void;
  onHover?: (item: TimelineEntry[], event: PointerEvent) => void;
}

export interface TimelineProps extends TimelineOptions {
  dataset: TimelineEntry[];
  selected: TimelineEntry['id'][];
}

// TODO: Contribute it to timeline-vis package
export interface OnSelectPayload {
  event: PointerEvent;
  items: TimelineEntry['id'][];
}

// TODO: Contribute it to timeline-vis package
export interface OnClickPayload {
  event: PointerEvent;
  customTime: null;
  group: null;
  isCluster: boolean;
  /* Cluster that will be selected */
  item: null | string;
  /* Items that was selected */
  items: null | TimelineEntry['id'][];
  pageX: number;
  pageY: number;
  time: Date;
  what: 'background' | 'item';
  x: number;
  y: number;
}
