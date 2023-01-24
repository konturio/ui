// TODO: Contribute it to timeline-vis package
export interface OnSelectPayload {
  event: PointerEvent;
  items: string[];
}

// TODO: Contribute it to timeline-vis package
export interface OnEntryClickPayload {
  event: PointerEvent;
  group: string | null;
  isCluster: boolean;
  /* Cluster that will be selected */
  item: number | string;
  /* Items that was selected */
  items: number[] | null;
  pageX: number;
  pageY: number;
  time: Date;
  what: 'background' | 'item' | 'axis' | 'group-label' | 'custom-time' | 'current-time';
  x: number;
  y: number;
}
