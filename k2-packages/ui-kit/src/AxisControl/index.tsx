import React from 'react';
import s from './style.css';
import cn from 'clsx';

interface Axis {
  records: TableHeading[];
  row?: boolean;
}

function Axis({ records, row = false }: Axis) {
  return (
    <table className={s.axisTable}>
      <tbody>
        {row ? (
          <tr className={s.row}>
            {records.map((rec) => (
              <td key={rec.label} className={s.cellWrapper}>
                <div className={cn(s.axisRecord, rec.highlight && s.highlight, rec.selected && s.selected)}>
                  {rec.label}
                </div>
              </td>
            ))}
          </tr>
        ) : (
          records.map((rec) => (
            <tr key={rec.label} className={[s.column].join(' ')}>
              <td className={cn(s.axisRecord, rec.highlight && s.highlight, rec.selected && s.selected)}>
                {rec.label}
              </td>
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

type TableHeading = {
  label: string;
  highlight?: boolean;
  selected?: boolean;
};

type MatrixEvents = (e, { x, y }: { x: number; y: number }) => void;
export interface AxisControl {
  legend: (angle: number) => JSX.Element;
  angle?: number;
  onHover?: MatrixEvents;
  onClick?: MatrixEvents;
  table: {
    x: TableHeading[];
    y: TableHeading[];
    matrix: (number | null)[][];
    selectedCell?: { x: number; y: number };
  };
}

const attachPosition = (position: { x: number; y: number }) => (cb?: Function) => (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => cb && cb(e, position);

const getGridPosition = (col: number, row: number) => ({
  gridColumn: `${col + 1} / ${col + 2}`,
  gridRow: `${row + 1} / ${row + 2}`,
});

export default function AxisControl({ legend, angle = 0, table, onHover, onClick }: AxisControl) {
  return (
    <div className={s.rootGrid}>
      <Axis row records={table.x} />
      <div className={s.legendSlot}>{legend(angle)}</div>
      <div className={s.valuesGrid} style={getGridStyle(table.x.length, table.y.length)}>
        {table.matrix.map((row, rowIndex) =>
          row.map((val, colIndex) => {
            const call = attachPosition({ x: colIndex, y: rowIndex });
            const isFromSelectedRow = table.selectedCell && table.selectedCell.x === colIndex;
            const isFromSelectedCol = table.selectedCell && table.selectedCell.y === rowIndex;

            return (
              <div
                className={cn(s.valueCell, isFromSelectedRow && s.selectedRow, isFromSelectedCol && s.selectedCol)}
                style={getGridPosition(colIndex, rowIndex)}
                key={val ?? colIndex}
                onMouseOver={call(onHover)}
                onClick={call(onClick)}
              >
                <div className={s.valueFill} style={{ opacity: val === null ? 0 : Math.abs(val) }}></div>
                {val?.toFixed(3)}
              </div>
            );
          }),
        )}
      </div>
      <Axis records={table.y} />
    </div>
  );
}
