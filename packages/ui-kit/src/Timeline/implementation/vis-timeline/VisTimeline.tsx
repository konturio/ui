import { useEffect, useImperativeHandle, useMemo, useRef, forwardRef, useState, useCallback } from 'react';
import { DataSet } from 'vis-data';
import { toVisTimelineDataset } from './toVisTimelineDataset';
import { useVisTimeline } from './useVisTimeline';
import type { TolltipEntry, TimelineProps } from '../../types';

export interface TimelineImperativeApi {
  fit: () => void;
}

export const VisTimeline = forwardRef<TimelineImperativeApi | null, TimelineProps>(
  ({ dataset, selected, ...rest }, ref) => {
    const options = useMemo(() => rest, Object.values(rest));
    const timelineContainerRef = useRef(null);
    const data = useMemo(() => new DataSet(dataset.map(toVisTimelineDataset)), [dataset]);

    const { tooltipComponent: TooltipComponent } = rest;

    const tooltipTargetRef = useRef<Element | null>(null);

    const [tooltipData, setTooltipData] = useState<{
      entry: TolltipEntry;
    } | null>(null);

    const setTolltip = useCallback((payload: { entry: TolltipEntry; target: Element } | null) => {
      setTooltipData(() => {
        if (payload === null) {
          tooltipTargetRef.current = null;
          return null;
        }

        const { entry, target } = payload;
        tooltipTargetRef.current = target;

        return { entry };
      });
    }, []);

    // Timeline implementation
    const timeline = useVisTimeline(timelineContainerRef, data, options, setTolltip);

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

    return (
      <>
        <div ref={timelineContainerRef}></div>
        {TooltipComponent && tooltipData && (
          <TooltipComponent
            hoverBehavior
            open={tooltipData !== null}
            anchor={tooltipTargetRef}
            entry={tooltipData.entry}
            onClose={() => setTooltipData(null)}
          />
        )}
      </>
    );
  },
);

VisTimeline.displayName = 'VisTimeline';
