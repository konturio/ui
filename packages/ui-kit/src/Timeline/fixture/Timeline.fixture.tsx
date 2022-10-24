import { useState } from 'react';
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
  ['Timeline single range']: () => {
    const [data] = useState(() =>
      Object.values([episodesMap[0]]).map((d) => ({
        id: d.id,
        start: new Date(d.startedAt),
        end: new Date(d.endedAt),
      })),
    );

    const [selected, setSelected] = useState([] as (number | string)[]);

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
  ['Timeline Points']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).map((d) => ({
        id: d.id,
        start: new Date(d.updatedAt),
      })),
    );

    const [selected, setSelected] = useState([] as (number | string)[]);
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
  ['Custom Components']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).slice(0, 2).map((d) => ({
        id: d.id,
        start: new Date(d.startedAt),
        end: new Date(d.endedAt),
      })),
    );

    const [selected, setSelected] = useState([] as (number | string)[]);
    const [cluster] = useValue('cluster', {
      defaultValue: false,
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
          tooltipComponent={({ originalItemData }) => {
            return (
              <div>
                {originalItemData.id ? (
                  <ul>
                    <li>Start: {String(originalItemData.start)}</li>
                    <li>End: {String(originalItemData.end)}</li>
                  </ul>
                ) : (
                  'Click to open'
                )}
              </div>
            );
          }}
          timelineEntryComponent={CustomComponent}
        />
      </div>
    );
  },
};

function CustomComponent({ isCluster }: { isCluster: boolean }) {
  return (
    <div
      style={{
        backgroundColor: isCluster ? 'red' : 'green',
        height: '14px',
      }}
    >123</div>
  );
}
