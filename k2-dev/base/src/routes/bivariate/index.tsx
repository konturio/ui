import React, { useState, useEffect, useCallback } from 'react';
import UI from '@k2-packages/ui-kit';
import { Stat, Table, DenominatorSelector, parseStat } from '@k2-packages/bivariate-tools';
import fStats from './f_new.json';

type Option = { label: string; value: string };
const PLACEHOLDER = { label: 'No options', value: 'not-selected' };
const createOptions = (strings: string[]) => strings.map((d) => ({ label: d, value: d }));
const someUndefined = (...args) => args.some((n) => n === undefined);

export default function Bivariate(): JSX.Element {
  const [stats, setStats] = useState<Stat>({
    correlationRates: fStats.map((d) => d.correlationrate),
  });

  /* Set available denominators */
  const [availableDenominators, setAvailableDenominators] = useState<{ x: Option[]; y: Option[] }>({
    x: [PLACEHOLDER],
    y: [PLACEHOLDER],
  });

  const [denominatorsSelector, setDenominatorsSelector] = useState<DenominatorSelector>();
  useEffect(() => {
    if (stats === undefined) return;
    const { xDenominators, yDenominators, selectDenominators } = parseStat(stats);
    setAvailableDenominators({
      x: createOptions(xDenominators),
      y: createOptions(yDenominators),
    });
    setDenominatorsSelector(() => selectDenominators);
  }, [stats]);

  /* Selected denominator */
  const [xDenominator, setXDenominator] = useState<Option['value']>();
  const [yDenominator, setYDenominator] = useState<Option['value']>();

  // Set defaults
  useEffect(() => {
    if (availableDenominators === undefined) return;
    setXDenominator(availableDenominators.x[0].value);
    setYDenominator(availableDenominators.y[0].value);
  }, [availableDenominators]);

  /* Generate Table */
  const [table, setTable] = useState<Table>();
  useEffect(() => {
    if (someUndefined(xDenominator, yDenominator, denominatorsSelector)) return;
    // @ts-ignore - sorry my TS kung-fu not enough for type this...
    const table = denominatorsSelector(xDenominator, yDenominator);
    setTable(table);
  }, [xDenominator, yDenominator]);

  const hoverHandle = useCallback(
    (e, { x, y }) => {
      setTable((table) => {
        if (table) {
          const newTable = { ...table };
          newTable.x.forEach((n, i) => {
            n.highlight = i === x;
          });

          newTable.y.forEach((n, i) => {
            n.highlight = i === y;
          });
          return newTable;
        }
        return table;
      });
    },
    [setTable],
  );

  return (
    <div>
      <div style={{ height: '40px', zIndex: 40, position: 'relative' }}>
        <UI.Selector
          selected={xDenominator}
          small={true}
          collapse={true}
          onChange={(value): void => setXDenominator(value)}
          options={availableDenominators.x}
        />
        <UI.Selector
          selected={yDenominator}
          small={true}
          collapse={true}
          onChange={(value): void => setYDenominator(value)}
          options={availableDenominators.y}
        />
      </div>
      {table !== undefined && (
        <UI.AxisControl
          angle={0}
          table={table}
          onHover={hoverHandle}
          legend={(angle) => (
            <UI.Legend
              rowSize={3}
              angle={angle}
              cells={new Array(9).fill(0).map((c, i) => ({
                color: `hsl(${(360 / 9) * i}, 50%, 50%)`,
                label: String(i),
              }))}
            />
          )}
        />
      )}
    </div>
  );
}
