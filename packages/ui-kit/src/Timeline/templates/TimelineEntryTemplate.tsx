import cn from 'clsx';
import s from './TimelineEntryTemplate.module.css';
import type { TimelineEntryComponent } from '../types';

export const TimelineEntryTemplate: TimelineEntryComponent = ({ isCluster, isSelected, content }) => {
  return (
    <div
      className={cn(s.timelineEntry, { [s.cluster]: isCluster, [s.selected]: isSelected })}
    >
      {/* { content } */}
    </div>
  );
};


