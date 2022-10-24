import { useEffect, useImperativeHandle, useMemo, useRef, forwardRef } from 'react';
import { DataSet } from 'vis-data';
import { toVisTimelineOptions } from './implementation/toVisTimelineOptions';
import { toVisTimelineDataset } from './implementation/toVisTimelineDataset';
import { useVisTimeline } from './implementation/useVisTimeline';
import type { TimelineOptions, TimelineEntry, OnClickPayload } from './types';

export interface TimelineProps extends TimelineOptions {
  dataset: TimelineEntry[];
  selected: TimelineEntry['id'][];
}

export interface TimelineImperativeApi {
  fit: () => void;
}

export const Timeline = forwardRef<TimelineImperativeApi | null, TimelineProps>(
  ({ dataset, selected, ...rest }, ref) => {
    const options = useMemo(() => rest, Object.values(rest));
    const timelineContainerRef = useRef(null);
    const data = useMemo(() => new DataSet(dataset.map(toVisTimelineDataset)), [dataset]);
    const dataMap = useMemo(() => new Map(dataset.map((d) => [d.id, d])), [dataset]);

    // Timeline implementation
    const timeline = useVisTimeline(timelineContainerRef);

    useImperativeHandle(
      ref,
      () => ({
        fit: () => timeline?.fit(),
      }),
      [timeline],
    );

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
      const timelineOptions = toVisTimelineOptions(options);
      if (zoomLimit.current) {
        timelineOptions.max = zoomLimit.current.max;
        timelineOptions.min = zoomLimit.current.min;
      }
      timeline.setOptions(timelineOptions);
      timeline.redraw();

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
  },
);

Timeline.displayName = 'Timeline';
