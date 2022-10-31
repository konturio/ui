import { useEffect, useImperativeHandle, useMemo, useRef, forwardRef } from 'react';
import { DataSet } from 'vis-data';
import { toVisTimelineDataset } from './toVisTimelineDataset';
import { useVisTimeline } from './useVisTimeline';
import type { TimelineProps } from '../../types';

export interface TimelineImperativeApi {
  fit: () => void;
}

export const VisTimeline = forwardRef<TimelineImperativeApi | null, TimelineProps>(
  ({ dataset, selected, ...rest }, ref) => {
    const options = useMemo(() => rest, Object.values(rest));
    const timelineContainerRef = useRef(null);
    const data = useMemo(() => new DataSet(dataset.map(toVisTimelineDataset)), [dataset]);

    // Timeline implementation
    const timeline = useVisTimeline(timelineContainerRef, data, options);

    useImperativeHandle(
      ref,
      () => ({
        fit: () => timeline?.fit(),
      }),
      [timeline],
    );

    /* Highlight cluster with selected item */
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

    return <div ref={timelineContainerRef}></div>;
  },
);

VisTimeline.displayName = 'VisTimeline';
