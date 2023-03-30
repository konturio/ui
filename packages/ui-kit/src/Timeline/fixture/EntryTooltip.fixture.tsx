import { useCallback, useState } from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Timeline } from '..';
import { isTimelineEntry } from '../types';
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

const getTooltipText = (data) => {
  const entry = isTimelineEntry(data) ? data : data.items[0];
  return entry.start.toISOString();
};

export default {
  ['Range Tooltip']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).map((d) => ({
        id: d.id,
        start: new Date(d.startedAt),
        end: new Date(d.endedAt),
        content: '',
      })),
    );

    const [selected, setSelected] = useState([] as (number | string)[]);
    const onSelect = useCallback((entries) => {
      setSelected(entries.map((e) => e.id));
    }, []);
    const cluster = useSelectExtra([false as const, { fitOnDoubleClick: true }]);
    const [stack] = useValue('stack', {
      defaultValue: true,
    });

    return (
      <div style={{ width: '85%' }}>
        <Timeline
          dataset={data}
          cluster={cluster}
          stack={stack}
          onSelect={onSelect}
          selected={selected}
          getTooltipText={getTooltipText}
        />
      </div>
    );
  },
  ['Single Point Tooltip']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap)
        .slice(0, 1)
        .map((d) => ({
          id: d.id,
          start: new Date(d.updatedAt),
          content: '',
        })),
    );

    const [selected, setSelected] = useState([] as (number | string)[]);

    const cluster = useSelectExtra([false as const, { fitOnDoubleClick: true }]);
    const [stack] = useValue('stack', {
      defaultValue: true,
    });

    return (
      <div style={{ width: '85%' }}>
        <Timeline
          dataset={data}
          cluster={cluster}
          stack={stack}
          onSelect={(entries) => setSelected(entries.map((e) => e.id))}
          selected={selected}
          getTooltipText={getTooltipText}
        />
        <ul>
          {Object.values(episodesMap)
            .filter((e) => selected.includes(e.id))
            .map((d) => (
              <li key={d.id}>{d.name}</li>
            ))}
        </ul>
      </div>
    );
  },
};
