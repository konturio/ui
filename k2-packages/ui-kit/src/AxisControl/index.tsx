import React from 'react';
import s from './style.module.css';
import cn from 'clsx';

const getGridStyle = (x, y, cellSize = 'auto') => ({
  display: 'inline-grid',
  gridTemplateColumns: `repeat(${x}, ${cellSize === 'auto' ? 'auto' : cellSize + 'px'})`,
  gridTemplateRows: `repeat(${y}, ${cellSize === 'auto' ? 'auto' : cellSize + 'px'})`,
});

const getGridPosition = (col: number, row: number) => ({
  gridColumn: `${col + 1} / ${col + 2}`,
  gridRow: `${row + 1} / ${row + 2}`,
});

const attachPositionToCb = (position: { x: number; y: number }) => (cb?: Function) => (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => cb && cb(e, position);

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

export function AxisControl({ legend, angle = 0, table, onHover, onClick }: AxisControl) {
  return (
    <div>
      {/* <Axis row records={table.x} /> */}
      <div className={s.valuesGrid} style={getGridStyle(table.x.length + 1, table.y.length + 1)}>
        {table.x.map((headerCell) => (
          <div
            key={headerCell.label}
            className={cn(
              s.axisRecord,
              s.column,
              s.verticalText,
              headerCell.highlight && s.highlight,
              headerCell.selected && s.selected,
            )}
          >
            {headerCell.label}
          </div>
        ))}
        <div className={s.legendSlot}>{legend(angle)}</div>
        {table.y.map((headerCell) => (
          <div
            key={headerCell.label}
            className={cn(s.axisRecord, s.row, headerCell.highlight && s.highlight, headerCell.selected && s.selected)}
          >
            {headerCell.label}
          </div>
        ))}
        {table.matrix.map((row, rI) =>
          row.map((val, colIndex) => {
            const rowIndex = rI + 1;
            const call = attachPositionToCb({ x: colIndex, y: rowIndex - 1 });
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
      {/* <Axis records={table.y} /> */}
    </div>
  );
}
