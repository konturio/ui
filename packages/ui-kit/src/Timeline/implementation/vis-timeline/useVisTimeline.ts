import { useEffect, useState, useRef, useMemo } from 'react';
import { DataSet } from 'vis-data';
import { Timeline as VisTimeline } from 'vis-timeline';
import { toVisTimelineOptions } from './toVisTimelineOptions';
import './theme.css';
import { toTimelineEntry } from './toTimlineEntry';
import { getClusterById } from './getClusterById';
import { toTooltipEntry } from './toTooltipEntry';
import { toVisTimelineDataset } from './toVisTimelineDataset';
import type { MutableRefObject } from 'react';
import type { OnEntryClickPayload } from './types';
import type { TooltipEntry, TimelineOptions, TimelineEntry } from '../../types';

function useSyncedRef<T>(data: T) {
  const dataRef = useRef<T>() as MutableRefObject<T>;
  dataRef.current = data;
  return dataRef;
}

export function useVisTimeline<T extends TimelineEntry>(
  timelineContainerRef: MutableRefObject<null>,
  data: T[],
  options: TimelineOptions<T>,
  setTooltipEntry: (payload: { entry: TooltipEntry<T>; target: Element } | null) => void,
) {
  const dataset = useMemo(() => new DataSet(data.map(toVisTimelineDataset)), [data]);

  const [timeline, setTimeline] = useState<VisTimeline | null>(null);
  const timelineRef = useRef(timeline);
  /* Create timeline instance */
  // Every time when option changes we must recreate timeline,
  // because most options applying only in constructor
  useEffect(() => {
    if (timelineContainerRef.current === null) return;
    const visOptions = toVisTimelineOptions(options);
    const timeline = new VisTimeline(timelineContainerRef.current, dataset, visOptions);
    setTimeline(timeline);
    timelineRef.current = timeline;
    // timeline.fit(); uncomment if not fit
    return () => {
      // I use ref here for instant reset timeline link.
      // Since timeline changed only on next render
      // setData effect crashes with "this.itemSet.body is null" error
      // in case of direct (without ref) usage
      timelineRef.current = null;
      timeline.destroy();
    };
    // Data not added because for update only data we use another effect (see below)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timelineContainerRef, options]);

  /* Update dataset */
  useEffect(() => {
    if (!timelineRef.current) return;
    timelineRef.current.setData({ items: dataset });
  }, [dataset]);

  /* Implement onSelect handler trough 'click' listener */
  const dataMapRef = useSyncedRef(dataset);
  const { onSelect } = options;

  useEffect(() => {
    if (timeline === null) return;

    const onItemHover = ({ item, event }: { item: number; event: { target: Element } }) => {
      const entry = dataMapRef.current.get(item) || getClusterById(item, timeline);

      if (entry) {
        setTooltipEntry({
          entry: toTooltipEntry(entry),
          target: event.target,
        });
      }
    };

    const onItemOut = () => {
      setTooltipEntry(null);
    };

    timeline.on('itemover', onItemHover);
    timeline.on('itemout', onItemOut);

    return () => {
      timeline.off('itemover', onItemHover);
      timeline.off('itemout', onItemOut);
    };
  }, [timeline, setTooltipEntry, dataMapRef]);

  useEffect(() => {
    if (!onSelect) return;
    if (timeline === null) return;
    if (!dataMapRef.current) return;
    const onSelectCb = (payload: OnEntryClickPayload) => {
      if (payload.what !== 'item') return;

      if (payload.isCluster) {
        // TODO - add itemSet in public interface of lib
        const cluster = getClusterById(payload.item, timeline);
        const entriesInCluster = cluster.getData().items.map((e) => dataMapRef.current.get(e.id));
        onSelect(entriesInCluster, payload.event);
      } else {
        const selectedEntries = timeline.getSelection().reduce((acc, id) => {
          const entry = dataMapRef.current.get(id);
          if (entry) {
            const timelineEntry = toTimelineEntry<T>(entry);
            acc.push(timelineEntry);
          }
          return acc;
        }, [] as T[]);
        onSelect(selectedEntries, payload.event);
      }
    };
    timeline.on('click', onSelectCb);
    return () => {
      timeline.off('click', onSelectCb);
    };
    // I use data from ref, because data changes will handled by timeline instance change
  }, [timeline, onSelect, dataMapRef]);

  return timeline;
}
