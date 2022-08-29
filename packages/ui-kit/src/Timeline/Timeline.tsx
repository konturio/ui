import { useEffect, useMemo, useRef, useState } from 'react';
import { DataSet } from 'vis-data';
import { DataItem, Timeline as VisTimeline, TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

export interface TimelineEntry {
  id: string | number;
  start: Date;
  end?: Date;
  group?: string;
}

export interface TimelineOptions {
  /* Show overlapped entries as stack */
  stack: boolean;
  /* Join bunch of small entries in cluster */
  cluster: boolean;
  onSelect?: (item: TimelineEntry[]) => void;
  onHover?: (item: TimelineEntry[]) => void;
}

interface TimelineProps extends TimelineOptions {
  dataset: TimelineEntry[];
  selected: TimelineEntry['id'][];
}

// TODO: Contribute it to timeline-vis package
interface OnSelectPayload {
  event: PointerEvent;
  items: TimelineEntry['id'][];
}

// TODO: Contribute it to timeline-vis package
interface OnClickPayload {
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
});

const createTimeLineOptions = (data: DataSet<DataItem, 'id'>, options: TimelineOptions): VisTimelineOptions => {
  const timelineOptions: VisTimelineOptions = {
    max: data.max('id')?.end,
    min: data.min('id')?.start,
    stack: options.stack,
    template: (item, el, data) => {
      const div = document.createElement('div');
      return div;
    },
  };

  if (options.cluster) {
    timelineOptions.cluster = {};
  }

  return timelineOptions;
};

export function Timeline({ dataset, selected, ...rest }: TimelineProps): JSX.Element {
  const options = useMemo(() => rest, Object.values(rest));
  const timelineContainerRef = useRef(null);
  const data = useMemo(() => new DataSet(dataset.map(createDatasetItem)), [dataset]);
  const dataMap = useMemo(() => new Map(dataset.map((d) => [d.id, d])), [dataset]);

  // Timeline init. Takes a lot of time (about ~2 sec on example dataset);
  const optionsRef = useRef(options);
  const [timeline, setTimeline] = useState<VisTimeline | null>(null);
  useEffect(() => {
    if (timelineContainerRef.current === null) return;
    const timeline = new VisTimeline(
      timelineContainerRef.current,
      data,
      // I use options from ref, for avoid timeline recreation when only options changed
      createTimeLineOptions(data, optionsRef.current),
    );
    setTimeline(timeline);
    return () => {
      timeline.destroy();
    };
  }, [data]);

  // Update options
  const dataRef = useRef(data);
  useEffect(() => {
    if (!timeline) return;
    timeline.setOptions(createTimeLineOptions(dataRef.current, options));
    // I use data from ref, because data changes will handled by timeline instance change
  }, [timeline, options]);

  // Add selection
  useEffect(() => {
    if (timeline === null) return;
    /* Find out what cluster should be highlighted */
    // TODO - add itemSet in public interface if lib
    // TODO - performance can be improved here by using more clever algorithm
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
        onSelect(entriesInCluster);
      } else {
        const selectedEntries = timeline.getSelection().reduce((acc, id) => {
          const entry = dataMapRef.current.get(id);
          if (entry) acc.push(entry);
          return acc;
        }, [] as TimelineEntry[]);
        onSelect(selectedEntries);
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
