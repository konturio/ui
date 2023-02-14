import { useEffect, useImperativeHandle, useMemo, useRef, forwardRef, useState, useCallback } from 'react';
import { useVisTimeline } from './useVisTimeline';
import type { TooltipEntry, TimelineProps } from '../../types';

export interface TimelineImperativeApi {
  fit: () => void;
}

export const VisTimeline = forwardRef<TimelineImperativeApi | null, TimelineProps>(
  ({ dataset, selected, ...rest }, ref) => {
    const options = useMemo(() => rest, Object.values(rest));
    const timelineContainerRef = useRef(null);

    const { tooltipComponent: TooltipComponent } = rest;

    const tooltipTargetRef = useRef<Element | null>(null);

    const [tooltipData, setTooltipData] = useState<{
      entry: TooltipEntry;
    } | null>(null);

    const setTooltip = useCallback((payload: { entry: TooltipEntry; target: Element } | null) => {
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
    const timeline = useVisTimeline(timelineContainerRef, dataset, options, setTooltip);

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
        <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
          <svg
            aria-hidden="true"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
          >
            <clipPath id="marker" clipPathUnits="objectBoundingBox" transform="scale(0.0825, 0.0525)">
              <path fill="black" d="M12 6c0 5.314-6 12-6 12S0 11.314 0 6a6 6 0 1 1 12 0Z" />
            </clipPath>
            <clipPath id="marker-border" clipPathUnits="objectBoundingBox" transform="scale(0.07, 0.048)">
              <path
                fill="black"
                fillRule="evenodd"
                d="M7 2a5 5 0 0 0-5 5c0 2.347 1.354 5.136 2.841 7.452A35.253 35.253 0 0 0 7 17.444a34.986 34.986 0 0 0 2.159-2.992C10.646 12.136 12 9.347 12 7a5 5 0 0 0-5-5Zm0 17-.745.668-.001-.002-.005-.005-.015-.017a12.66 12.66 0 0 1-.254-.294 37.252 37.252 0 0 1-2.821-3.817C1.646 13.178 0 9.966 0 7a7 7 0 0 1 14 0c0 2.966-1.646 6.178-3.159 8.533a37.25 37.25 0 0 1-2.82 3.817 22.109 22.109 0 0 1-.255.294l-.015.017-.005.005v.001c-.001 0-.002 0-.746-.667Zm0 0 .744.668-.744.83-.745-.83L7 19Z"
                clipRule="evenodd"
              />
            </clipPath>
          </svg>
        </div>

        <div ref={timelineContainerRef}></div>
        {TooltipComponent && tooltipData && (
          <TooltipComponent
            hoverBehavior
            open={tooltipData !== null}
            triggerRef={tooltipTargetRef}
            entry={tooltipData.entry}
            onClose={() => setTooltipData(null)}
          />
        )}
      </>
    );
  },
);

VisTimeline.displayName = 'VisTimeline';
