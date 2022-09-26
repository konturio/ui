import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';
import { Timeline as VisTimeline } from 'vis-timeline';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import './timeline.css';

export function useVisTimeline(timelineContainerRef: MutableRefObject<null>) {
  const [timeline, setTimeline] = useState<VisTimeline | null>(null);
  useEffect(() => {
    if (timelineContainerRef.current === null) return;
    const timeline = new VisTimeline(timelineContainerRef.current, []);
    setTimeline(timeline);
    return () => {
      timeline.destroy();
    };
  }, [timelineContainerRef]);

  return timeline;
}
