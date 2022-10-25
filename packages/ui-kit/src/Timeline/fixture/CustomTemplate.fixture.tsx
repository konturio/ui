import { useState } from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Timeline } from '..';
import testData from './testData';
import { useSelectExtra } from './useSelectExtra';

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

function CustomComponent({ isCluster }: { isCluster: boolean }) {
  return (
    <div
      style={{
        backgroundColor: isCluster ? 'red' : 'green',
        height: '14px',
      }}
    >
      123
    </div>
  );
}

export default {
  ['Custom Timeline Entry']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap)
        .slice(0, 2)
        .map((d) => ({
          id: d.id,
          start: new Date(d.startedAt),
          end: new Date(d.endedAt),
        })),
    );

    const [selected, setSelected] = useState([] as (number | string)[]);
    const cluster = useSelectExtra([false as const, { fitOnDoubleClick: true }]);
    const [stack] = useValue('stack', {
      defaultValue: true,
    });

    return (
      <div style={{ minWidth: '85%' }}>
        <Timeline
          dataset={data}
          cluster={cluster}
          stack={stack}
          onSelect={(entries) => setSelected(entries.map((e) => e.id))}
          selected={selected}
          timelineEntryComponent={CustomComponent}
        />
      </div>
    );
  },
};
