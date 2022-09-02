import { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { DataSet } from 'vis-data';
import { DataItem, Timeline as VisTimeline, TimelineItem, TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

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

const createDatasetItem = (e: TimelineEntry): DataItem => ({
  id: e.id,
  start: e.start,
  end: e.end,
  content: '',
  tooltip: '123',
});

const createTimeLineOptions = (options: TimelineOptions): VisTimelineOptions => {
  const timelineOptions: VisTimelineOptions = {
    stack: options.stack,
  };

  if (options.cluster) {
    timelineOptions.cluster = options.cluster === true ? {} : options.cluster;
  }

  const { timelineEntryComponent: createTimelineEntryComponent } = options;
  if (createTimelineEntryComponent) {
    // TODO fix types in library
    // @ts-expect-error error in typings of library
    timelineOptions.template = (item: unknown, el: Element, data) => {
      const component = createTimelineEntryComponent(data);
      if (component === null) {
        return el;
      }
      const wrapper = document.createElement('div');
      ReactDOM.render(component, wrapper);
      return wrapper;
    };
  }

  const { tooltipComponent: createTooltipComponent } = options;
  if (createTooltipComponent) {
    timelineOptions.tooltip = {
      // TODO fix types in library
      // @ts-expect-error error in typings of library, template can return Element
      template: (originalItemData, parsedItemData) => {
        console.log('template call')
        const wrapper = document.createElement('div');
        ReactDOM.render(createTooltipComponent({ originalItemData, parsedItemData }), wrapper);
        return wrapper;
      },
    };
  }

  return timelineOptions;
};

export function Timeline({ dataset, selected, ...rest }: TimelineProps): JSX.Element {
  const options = useMemo(() => rest, Object.values(rest));
  const timelineContainerRef = useRef(null);
  const data = useMemo(() => new DataSet(dataset.map(createDatasetItem)), [dataset]);
  const dataMap = useMemo(() => new Map(dataset.map((d) => [d.id, d])), [dataset]);

  // Timeline init
  const [timeline, setTimeline] = useState<VisTimeline | null>(null);
  useEffect(() => {
    if (timelineContainerRef.current === null) return;
    const timeline = new VisTimeline(timelineContainerRef.current, []);
    setTimeline(timeline);
    return () => {
      timeline.destroy();
    };
  }, []);

  const zoomLimit = useRef<{ max: Date; min: Date } | null>(null);
  useEffect(() => {
    if (!timeline) return;
    timeline.setData({ items: data });
    // Limit max zoom
    zoomLimit.current = timeline.getItemRange();
  }, [timeline, data]);

  const firstPass = useRef(true);
  useEffect(() => {
    if (!timeline) return;
    const timelineOptions = createTimeLineOptions(options);
    if (zoomLimit.current) {
      timelineOptions.max = zoomLimit.current.max;
      timelineOptions.min = zoomLimit.current.min;
    }
    timeline.setOptions(timelineOptions);

    if (firstPass.current) {
      firstPass.current = false;
      timeline.fit();
    }
  }, [timeline, options]);

  // Add selection
  useEffect(() => {
    if (timeline === null) return;
    /* Find out what cluster should be highlighted */
    // TODO - add itemSet in public interface if lib
    // @ts-expect-error timeline not expose itemSet in interface.
    const affectedClusters = timeline.itemSet.clusters.reduce((acc, cluster) => {
      const clusterEntries = cluster.getData().items.map((i) => i.id);
      if (selected.some((s) => clusterEntries.includes(s))) {
        acc.push(cluster.id);
      }
      return acc;
    }, []);
    timeline.setSelection([selected, ...affectedClusters]);
  }, [timeline, selected]);

  // Add on select handler
  const dataMapRef = useRef(dataMap);
  const { onSelect } = options;
  useEffect(() => {
    if (!onSelect) return;
    if (timeline === null) return;
    if (!dataMapRef.current) return;
    const onSelectCb = (payload: OnClickPayload) => {
      if (payload.isCluster) {
        // TODO - add itemSet in public interface if lib
        // @ts-expect-error timeline not expose itemSet in interface.
        const cluster = timeline.itemSet.clusters.find((c) => c.id === payload.item);
        const entriesInCluster = cluster.getData().items.map((e) => dataMapRef.current.get(e.id));
        onSelect(entriesInCluster, payload.event);
      } else {
        const selectedEntries = timeline.getSelection().reduce((acc, id) => {
          const entry = dataMapRef.current.get(id);
          if (entry) acc.push(entry);
          return acc;
        }, [] as TimelineEntry[]);
        onSelect(selectedEntries, payload.event);
      }
    };
    timeline.on('click', onSelectCb);
    return () => {
      timeline.off('click', onSelectCb);
    };
    // I use data from ref, because data changes will handled by timeline instance change
  }, [timeline, onSelect]);

  return <div ref={timelineContainerRef}></div>;
}
