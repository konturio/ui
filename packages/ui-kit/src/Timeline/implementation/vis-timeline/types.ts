// TODO: Contribute it to timeline-vis package
export interface OnSelectPayload {
  event: PointerEvent;
  items: string[];
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
  items: null | string[];
  pageX: number;
  pageY: number;
  time: Date;
  what: 'background' | 'item';
  x: number;
  y: number;
}
