import { useCallback, useRef, useState } from 'react';
import { Timeline } from '..';
import testData from './testData';
import type { TimelineImperativeApi } from '../types';
import { Button } from '../../Button';

const episodesMap = testData.reduce(
  (acc, i, n) => {
    acc[n.toString()] = { id: n, ...i };
    return acc;
  },
  {} as Record<
    string,
    {
      name: string;
      id: number;
      startedAt: string;
      endedAt: string;
      updatedAt: string;
    }
  >,
);

export default {
  ['Fit']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).map((d) => ({
        id: d.id,
        start: new Date(d.startedAt),
        end: new Date(d.endedAt),
      })),
    );

    const timelineApi = useRef<TimelineImperativeApi>(null);
    const fitTimeline = useCallback(() => {
      timelineApi.current?.fit();
    }, []);

    return (
      <div style={{ minWidth: '85%', display: 'flex', flexFlow: 'column nowrap', gap: '8px'}}>
        <Button size='small' onClick={fitTimeline}> Fit </Button>
        <div >
          <Timeline ref={timelineApi} dataset={data} cluster={false} stack={false} selected={[]} />
        </div>
      </div>
    );
  },
};
