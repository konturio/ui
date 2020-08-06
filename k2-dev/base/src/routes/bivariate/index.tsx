import React, { useState, useEffect } from 'react';
import UI from '@k2-packages/ui-kit';
import {
  ratesToMatrix,
  normalizeBy,
  pickAvailableDenominators,
  CorrelationRate,
  Stat,
  parseStat,
} from '@k2-packages/bivariate-tools';

const createHash = (x, y) => `${x}|${y}`;

export default function Bivariate(): JSX.Element {
  const [stats, setStats] = useState<Stat>();


  /* Normalize all invariants by pairs of axis denominators */
  const [correlationsByQuotient, setCorrelations] = useState<ReturnType<typeof normalizeBy>>();
  useEffect(() => {
    if (stats === undefined) return;
    const correlations = normalizeBy<CorrelationRate>(stats.correlationRates, (axis) =>
      createHash(axis.x.quotient[1], axis.y.quotient[1]),
    );
    setCorrelations(correlations);
  }, [stats]);

  /* Pick all available denominators and create options for selector */
  type Option = { label: string; value: string };
  const [availableDenominators, setAvailableDenominators] = useState<{ x: Option[]; y: Option[] }>({
    x: [{ label: 'No options', value: 'not-selected' }],
    y: [{ label: 'No options', value: 'not-selected' }],
  });
  useEffect(() => {
    if (stats === undefined) return;
    const [xDenominators, yDenominators] = pickAvailableDenominators(stats.correlationRates);
    setAvailableDenominators({
      x: xDenominators.map((d) => ({ label: d, value: d })),
      y: yDenominators.map((d) => ({ label: d, value: d })),
    });
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

  /* Current data slice */
  const [dataSlice, setDataSlice] = useState<any>();
  useEffect(() => {
    if (correlationsByQuotient === undefined) return;
    const hash = createHash(xDenominator, yDenominator);
    const slice = correlationsByQuotient[hash];
    setDataSlice(slice);
  }, [correlationsByQuotient, xDenominator, yDenominator]);

  /* Generated matrix for selected options */
  const [matrix, setMatrix] = useState<ReturnType<typeof ratesToMatrix> | null>(null);
  useEffect(() => {
    if (dataSlice === undefined) return;
    const matrix = ratesToMatrix(dataSlice);
    setMatrix(matrix);
  }, [dataSlice]);

  return (
    <div>
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
      {matrix !== null && (
        <UI.AxisControl
          angle={0}
          table={matrix}
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
