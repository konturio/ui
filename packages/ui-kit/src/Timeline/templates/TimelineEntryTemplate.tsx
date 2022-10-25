import type { TimelineEntryComponent } from '../types';

export const TimelineEntryTemplate: TimelineEntryComponent = ({ isCluster, content }) => {
  return (
    <div
      style={{
        backgroundColor: isCluster ? 'red' : 'green',
        height: '14px',
      }}
    >
      { content }
    </div>
  );
};
