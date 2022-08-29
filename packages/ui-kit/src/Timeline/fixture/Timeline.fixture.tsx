import { useEffect, useState } from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Timeline } from '..';
import testData from './testData';

const episodesMap = testData.reduce(
  (acc, i, n) => {
    acc[n.toString()] = { id: n, ...i };
    return acc;
  },
  {} as Record<
    string,
    {
      id: number;
      startedAt: string;
      endedAt: string;
    }
  >,
);

export default {
  Timeline_Points: () => {
    const [data, setData] = useState(() =>
      Object.values(episodesMap).map((d) => ({
        id: d.id,
        start: new Date(d.startedAt),
        end: new Date(d.endedAt),
      })),
    );

    const [selected, setSelected] = useState([] as number[]);

    const [cluster] = useValue('cluster', {
      defaultValue: true,
    });

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
        />
        <ul>
          {Object.values(episodesMap).map((d) => (
            <li
              key={d.id}
              style={{ color: selected.includes(d.id) ? 'red' : 'inherit' }}
              onClick={() => {
                setSelected([d.id]);
              }}
            >
              {d.name}
            </li>
          ))}
        </ul>
      </div>
    );
  },
};
