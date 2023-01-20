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

export default {
  ['Margins']: () => {
    const [data] = useState(() =>
      Object.values(episodesMap).map((d) => ({
        id: d.id,
        start: new Date(d.startedAt),
        end: new Date(d.endedAt),
      })),
    );

    const [axisMargin] = useValue('axisMargin', {
      defaultValue: 17,
    });

    const [itemVerticalMargin] = useValue('itemVerticalMargin', {
      defaultValue: 14,
    });

    const [itemHorizontalMargin] = useValue('itemHorizontalMargin', {
      defaultValue: 14,
    });

    const cluster = useSelectExtra([false as const, { fitOnDoubleClick: true }]);
    const [stack] = useValue('stack', { defaultValue: true });

    return (
      <div style={{ minWidth: '85%', display: 'flex', flexFlow: 'column nowrap', gap: '8px' }}>
        <div>
          <Timeline
            margin={{
              axis: axisMargin,
              item: {
                vertical: itemVerticalMargin,
                horizontal: itemHorizontalMargin,
              },
            }}
            dataset={data}
            cluster={cluster}
            stack={stack}
            selected={[]}
          />
        </div>
      </div>
    );
  },
};
