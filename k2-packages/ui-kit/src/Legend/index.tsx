import React from 'react';
import s from './style.styl';
import { Cell } from './types';
import { createMatrix } from './matrix';
import { getRotationStyle } from './styleGen';

export interface Legend {
  rowSize: number;
  cells: Cell[];
  angle?: number;
}

function Row({ cells, style }: { cells: Cell[]; style: {} }) {
  return (
    <tr>
      {cells.map((cell) => (
        <td key={cell.label} className={s.cell} style={{ backgroundColor: cell.color }}>
          <div style={style}>{cell.label}</div>
        </td>
      ))}
    </tr>
  );
}

export default function Legend({ rowSize, cells, angle = 0 }: Legend) {
  const matrix = createMatrix(cells, rowSize);
  const tableRotationStyle = getRotationStyle(angle);
  const labelRotationStyle = getRotationStyle(angle * -1);

  return (
    <table className={s.table} style={tableRotationStyle}>
      {matrix.map((rowCells: Cell[], i) => (
        <Row key={i} cells={rowCells} style={labelRotationStyle} />
      ))}
    </table>
  );
}
