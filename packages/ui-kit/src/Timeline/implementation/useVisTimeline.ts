import { useEffect, useState } from 'react';
import { Timeline as VisTimeline } from 'vis-timeline';
import './theme.css';
import type { MutableRefObject } from 'react';

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
