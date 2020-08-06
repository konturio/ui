import React from 'react';
import UI from '@k2-packages/ui-kit';
import { ratesToMatrix, normalizeBy, pickAvailableDenominators, CorrelationRate } from '@k2-packages/bivariate-tools';

const createHash = (x, y) => `${x}|${y}`;
export default function Bivariate(): JSX.Element {
  const normalizedByDenominator = normalizeBy<CorrelationRate>(stats.correlationRates, (axis) =>
    createHash(axis.x.quotient[1], axis.y.quotient[1]),
  );
  const [xDenominators, yDenominators] = pickAvailableDenominators(stats.correlationRates);
  const xDenominator = xDenominators[0];
  const yDenominator = yDenominators[0];
  const currentMatrix = normalizedByDenominator[createHash(xDenominator, yDenominator)];
  const matrix = ratesToMatrix(currentMatrix);

  return (
    <div>
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
    </div>
  );
}
