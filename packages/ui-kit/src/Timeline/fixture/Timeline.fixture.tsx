import { useMemo, useState } from 'react';
import { useValue, useSelect } from 'react-cosmos/fixture';
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

export default {
  ['Timeline Ranges']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).map((d) => ({
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
  ['Timeline single range']: () => {
    const [data] = useState(() =>
      Object.values([episodesMap[0]]).map((d) => ({
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
  ['Timeline Points']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).map((d) => ({
        id: d.id,
        start: new Date(d.updatedAt),
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
  ['Single Point']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).slice(0, 1).map((d) => ({
        id: d.id,
        start: new Date(d.updatedAt),
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
