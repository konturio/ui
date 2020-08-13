import React, { useState, useEffect, useCallback } from 'react';
import UI from '@k2-packages/ui-kit';
import { Stat, Table, DenominatorSelector, NumeratorSelector, parseStat } from '@k2-packages/bivariate-tools';
import { updateTableOnClick, updateTableOnHover } from './handlers';

type Option = { label: string; value: string };
const PLACEHOLDER = { label: 'No options', value: 'not-selected' };
const createOptions = (strings: string[]) => strings.map((d) => ({ label: d, value: d }));

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
  const [numeratorsSelector, setNumeratorsSelector] = useState<NumeratorSelector>();
  const [table, setTable] = useState<Table>();
  useEffect(() => {
    if (denominatorsSelector !== undefined && xDenominator !== undefined && yDenominator !== undefined) {
      const result = denominatorsSelector(xDenominator, yDenominator);
      if (result !== null) {
        const { matrix, selectNumerators } = result;
        setTable(matrix);
        setNumeratorsSelector(() => selectNumerators);
      }
    }
  }, [xDenominator, yDenominator]);

  const hoverHandler = useCallback(
    (e, { x, y }) => {
      setTable((table) => updateTableOnHover(table, { x, y }));
    },
    [setTable],
  );

  const clickHandler = useCallback(
    (e, { x, y }) => {
      setTable((table) => updateTableOnClick(table, { x, y }));
    },
    [setTable],
  );

  const [selectedAxises, setSelectedAxis] = useState<{ x: Stat['axis'][0]; y: Stat['axis'][0] }>();
  useEffect(() => {
    const selectedX = table?.x.find((x) => x.selected);
    const selectedY = table?.y.find((y) => y.selected);
    if (selectedX !== undefined && selectedY !== undefined && numeratorsSelector !== undefined) {
      const selection = numeratorsSelector(selectedX.id, selectedY.id);
      if (selection) {
        setSelectedAxis(selection);
      }
    }
  }, [table]);

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
