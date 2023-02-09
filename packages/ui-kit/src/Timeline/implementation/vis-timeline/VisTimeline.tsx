import { useEffect, useImperativeHandle, useMemo, useRef, forwardRef, useState } from 'react';
import { DataSet } from 'vis-data';
import { toVisTimelineDataset } from './toVisTimelineDataset';
import { useVisTimeline } from './useVisTimeline';
import type { TooltipEntry, TimelineProps } from '../../types';
import type { TooltipCoords } from '../../../Tooltip/types';

export interface TimelineImperativeApi {
  fit: () => void;
}

export const VisTimeline = forwardRef<TimelineImperativeApi | null, TimelineProps>(
  ({ dataset, selected, ...rest }, ref) => {
    const options = useMemo(() => rest, Object.values(rest));
    const timelineContainerRef = useRef(null);
    const data = useMemo(() => new DataSet(dataset.map(toVisTimelineDataset)), [dataset]);

    const { tooltipComponent: TooltipComponent } = rest;

    const [tooltipData, setTooltipData] = useState<{ entry: TooltipEntry; position: TooltipCoords } | null>(null);

    // Timeline implementation
    const timeline = useVisTimeline(timelineContainerRef, data, options, setTooltipData);

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
            position={tooltipData.position}
            entry={tooltipData.entry}
            onClose={() => setTooltipData(null)}
          />
        )}
      </>
    );
  },
);

VisTimeline.displayName = 'VisTimeline';
