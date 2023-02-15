import { useCallback, useState } from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Timeline } from '..';
import testData from './testData';
import { useSelectExtra } from './useSelectExtra';
import './custom-template.css';

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
        .slice(0, 20)
        .map((d) => ({
          id: d.id,
          start: new Date(d.startedAt),
          end: new Date(d.endedAt),
          content: '',
        })),
    );

    const [selected, setSelected] = useState(new Array<number>());
    const cluster = useSelectExtra([{ fitOnDoubleClick: true }, false as const]);
    const [stack] = useValue('stack', { defaultValue: false });

    const [blueClusterThreshold] = useValue('Blue cluster treshold', { defaultValue: 3 });

    const selectHandler = useCallback((entries) => setSelected(entries.map((e) => e.id)), []);
    const getClusterClassName = useCallback(
      (entries: { id: string | number; start: Date }[]) =>
        entries.length > blueClusterThreshold ? 'custom-cluster-classname' : 'custom-cluster-classname-small',
      [blueClusterThreshold],
    );

    return (
      <div style={{ minWidth: '85%' }}>
        <Timeline
          margin={1}
          dataset={data}
          cluster={cluster}
          stack={stack}
          onSelect={selectHandler}
          selected={selected}
          getEntryClassName={() => 'entry-custom-classname'}
          getClusterClassName={getClusterClassName}
        />
      </div>
    );
  },
};
