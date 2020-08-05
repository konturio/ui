import React from 'react';
import s from './style.styl';

export interface AxisControl {
  legend: (angle: number) => JSX.Element;
  angle?: number;
  table: {
    x: string[];
    y: string[];
    matrix: (number | null)[][];
  };
}

interface Axis {
  records: string[];
  row?: boolean;
}

function Axis({ records, row = false }: Axis) {
  return (
    <table className={s.axisTable}>
      <tbody>
        {row ? (
          <tr className={s.row}>
            {records.map((rec) => (
              <td key={rec} className={s.cellWrapper}>
                <div className={s.axisRecord}>{rec}</div>
              </td>
            ))}
          </tr>
        ) : (
          records.map((rec) => (
            <tr key={rec} className={[s.axis, s.column].join(' ')}>
              <td className={s.axisRecord}>{rec}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

function getGridStyle(x, y) {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${x}, auto)`,
    gridTemplateRows: `repeat(${y}, auto)`,
  };
}

export default function AxisControl({ legend, angle = 0, table }: AxisControl) {
  return (
    <div className={s.rootGrid}>
      <Axis row records={table.x} />
      <div className={s.legendSlot}>{legend(angle)}</div>
      <div className={s.valuesGrid} style={getGridStyle(table.x.length, table.y.length)}>
        {table.matrix.map((row) =>
          row.map((val, i) => (
            <div className={s.valueCell} key={val ?? i}>
              <div className={s.valueFill} style={{ opacity: val === null ? 0 : Math.abs(val) }}></div>
              {val}
            </div>
          )),
        )}
      </div>
      <Axis records={table.y} />
    </div>
  );
}
