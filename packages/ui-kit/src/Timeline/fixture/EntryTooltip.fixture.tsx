import { useCallback, useState } from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Timeline } from '..';
import { Tooltip } from '../../Tooltip';
import testData from './testData';
import { useSelectExtra } from './useSelectExtra';
import type { EntryTooltipProps } from '../types';

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

const TooltipComponent = ({ entry, ...rest }: EntryTooltipProps) => {
  return (
    <Tooltip {...rest} hoverBehavior>
      <div style={{ padding: '5px' }}>
        <strong>ID</strong>
        <div>{entry.id}</div>
        <strong>Start</strong>
        <div>{entry.start.toISOString()}</div>
        <strong>End</strong>
        <div>{entry.end?.toISOString()}</div>
      </div>
    </Tooltip>
  );
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
          tooltipComponent={TooltipComponent}
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
          tooltipComponent={TooltipComponent}
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
