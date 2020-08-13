import React, { useState, useEffect, useCallback } from 'react';
import UI from '@k2-packages/ui-kit';
import { Stat, Table, DenominatorSelector, parseStat } from '@k2-packages/bivariate-tools';

type Option = { label: string; value: string };
const PLACEHOLDER = { label: 'No options', value: 'not-selected' };
const createOptions = (strings: string[]) => strings.map((d) => ({ label: d, value: d }));
const someUndefined = (...args) => args.some((n) => n === undefined);

export default function Bivariate(): JSX.Element {
  const [stats, setStats] = useState<Stat>();

  useEffect(() => {
    fetch('/geocint/stat.json')
      .then((response) => response.json())
      .then((json) => {
        setStats(json);
      })
      .catch((e) => console.error(e));
  }, []);

  /**
   * Index axis by quotient
   * [numerator|denominator]: Axis
   */
  const [bivariateIndexes, setBivariateIndexes] = useState<ReturnType<typeof parseStat>['bivariateHashMap']>();

  /* Set available denominators */
  const [availableDenominators, setAvailableDenominators] = useState<{ x: Option[]; y: Option[] }>({
    x: [PLACEHOLDER],
    y: [PLACEHOLDER],
  });

  const [denominatorsSelector, setDenominatorsSelector] = useState<DenominatorSelector>();
  useEffect(() => {
    if (stats === undefined) return;
    const { xDenominators, yDenominators, selectDenominators, bivariateHashMap } = parseStat(stats);
    setBivariateIndexes(bivariateHashMap);

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

  const hoverHandler = useCallback(
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

  const clickHandler = useCallback(
    (e, { x, y }) => {
      setTable((table) => {
        if (table) {
          const newTable = { ...table };
          newTable.selectedCell = { x, y };
          newTable.x.forEach((n, i) => {
            n.selected = i === x;
          });

          newTable.y.forEach((n, i) => {
            n.selected = i === y;
          });
          return newTable;
        }
        return table;
      });
    },
    [setTable],
  );

  const [selectedAxises, setSelectedAxis] = useState<{ x: Stat['axis'][0]; y: Stat['axis'][0] }>();
  useEffect(() => {
    const selectedX = table?.x.find((x) => x.selected);
    const selectedY = table?.y.find((y) => y.selected);
    if (
      selectedX !== undefined &&
      selectedY !== undefined &&
      bivariateIndexes !== undefined &&
      xDenominator !== undefined &&
      yDenominator !== undefined
    ) {
      setSelectedAxis({
        x: bivariateIndexes.get(selectedX.id, xDenominator),
        y: bivariateIndexes.get(selectedY.id, yDenominator),
      });
    }
  }, [table, xDenominator, yDenominator]);

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
          onHover={hoverHandler}
          onClick={clickHandler}
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
