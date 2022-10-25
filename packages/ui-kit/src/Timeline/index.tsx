import { forwardRef, useMemo } from 'react';
import { VisTimeline } from './implementation/vis-timeline/VisTimeline';
import { TimelineEntryTemplate } from './templates/TimelineEntryTemplate';
import type { TimelineProps, TimelineImperativeApi } from './types';

export const Timeline = forwardRef<TimelineImperativeApi | null, TimelineProps>((props, ref) => {
  // Setup default templates
  const withDefaultsProps = useMemo(() => ({ timelineEntryComponent: TimelineEntryTemplate, ...props }), [props]);
  return <VisTimeline ref={ref} {...withDefaultsProps} />;
});

Timeline.displayName = 'Timeline';
