import React from 'react';
import s from './style.module.css';
import cn from 'clsx';
import { attachPositionToCb, setOffset } from './matrixFn';
import { Cell } from './Cell';
import { TableHeading } from './TableHeading';

const getGridStyle = (x, y, cellSize = 'auto') => ({
  display: 'inline-grid',
  gridTemplateColumns: `repeat(${x}, ${cellSize === 'auto' ? 'auto' : cellSize + 'px'})`,
  gridTemplateRows: `repeat(${y}, ${cellSize === 'auto' ? 'auto' : cellSize + 'px'})`,
});

type MatrixEvents = (e, { x, y }: { x: number; y: number }) => void;
export interface AxisControl {
  legend: (angle: number) => JSX.Element | null;
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
const isSelected = (selected?: number) => (current: number) => selected === current;

export function AxisControl({ legend, angle = 0, table, onHover, onClick }: AxisControl) {
  const checkIsFromSelectedRow = isSelected(table.selectedCell?.x);
  const checkIsFromSelectedCol = isSelected(table.selectedCell?.y);
  return (
    <div>
      <div className={s.valuesGrid} style={getGridStyle(table.x.length + 1, table.y.length + 1)}>
        <TableHeading entries={table.x} vertical />
        <div className={s.legendSlot}>{legend(angle)}</div>
        <TableHeading entries={table.y} />

        {table.matrix.map((row, rowIndex) =>
          row.map((val, colIndex) => {
            const isFromSelectedRow = checkIsFromSelectedRow(colIndex);
            const isFromSelectedCol = checkIsFromSelectedCol(rowIndex);
            const call = attachPositionToCb({ x: colIndex, y: rowIndex });
            const getCellPosition = setOffset(0, 1);

            if (val === null) {
              return (
                <Cell
                  className={cn(isFromSelectedRow && s.selectedRow, isFromSelectedCol && s.selectedCol)}
                  key={val ?? `${colIndex}|${rowIndex}`}
                  positionX={getCellPosition.col(colIndex)}
                  positionY={getCellPosition.row(rowIndex)}
                  value={val}
                  disabled
                >
                  <span></span>
                </Cell>
              );
            }

            return (
              <Cell
                selected={isFromSelectedRow && isFromSelectedCol}
                className={cn(isFromSelectedRow && s.selectedRow, isFromSelectedCol && s.selectedCol)}
                key={val ?? `${colIndex}|${rowIndex}`}
                onClick={call(onClick)}
                positionX={getCellPosition.col(colIndex)}
                positionY={getCellPosition.row(rowIndex)}
                value={val}
              >
                <span style={{ transform: `rotate(${-angle}deg)` }}>{val?.toFixed(3)}</span>
              </Cell>
            );
          }),
        )}
      </div>
    </div>
  );
}
