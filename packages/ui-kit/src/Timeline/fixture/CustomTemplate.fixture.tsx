import { useCallback, useState } from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Timeline } from '..';
import testData from './testData';
import { useSelectExtra } from './useSelectExtra';
import './custom-template.css';
import type { TimelineEntry } from '../types';

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
  ['Custom Timeline Entry']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap)
        .slice(0, 10)
        .map((d) => ({
          id: d.id,
          start: new Date(d.startedAt),
          end: new Date(d.endedAt),
        })),
    );

    const [selected, setSelected] = useState([] as (number | string)[]);
    const cluster = useSelectExtra([{ fitOnDoubleClick: true }, false as const]);
    const [stack] = useValue('stack', {
      defaultValue: false,
    });

    const selectHandler = useCallback((entries: TimelineEntry[]) => setSelected(entries.map((e) => e.id)), []);

    return (
      <div style={{ minWidth: '85%' }}>
        <Timeline
          margin={1}
          dataset={data}
          cluster={cluster}
          stack={stack}
          onSelect={selectHandler}
          selected={selected}
          timelineEntryClassName="entry-custom-classname"
          getClusterClassName={() => 'custom-cluster-classname'}
        />
      </div>
    );
  },
};
