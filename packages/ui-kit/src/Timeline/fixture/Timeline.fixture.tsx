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
          tooltipComponent={({ originalItemData }) => {
            return (
              <div>
                {originalItemData.id ? (
                  <ul>
                    <li>Start: {originalItemData.start}</li>
                    <li>End: {originalItemData.end}</li>
                  </ul>
                ) : (
                  'Click to open'
                )}
              </div>
            );
          }}
          timelineEntryComponent={({ isCluster }) => {
            return (
              <div
                style={{
                  backgroundColor: isCluster ? 'red' : 'transparent',
                  position: 'absolute',
                  right: 0,
                  left: 0,
                  top: 0,
                  bottom: 0,
                  borderRadius: '50%',
                }}
              ></div>
            );
          }}
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
