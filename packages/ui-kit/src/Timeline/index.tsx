import { forwardRef } from 'react';
import { VisTimeline } from './implementation/vis-timeline/VisTimeline';
import type { TimelineProps, TimelineImperativeApi } from './types';

export const Timeline = forwardRef<TimelineImperativeApi | null, TimelineProps>((props, ref) => {
  return <VisTimeline ref={ref} {...props} />;
});

export type { TimelineProps };

Timeline.displayName = 'Timeline';
