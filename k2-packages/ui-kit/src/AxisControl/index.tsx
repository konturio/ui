import React from 'react';
import styles from './style.module.css';
import clsx from 'clsx';
import { attachPositionToCb, setOffset } from './matrixFn';
import { Cell } from './Cell';
import { TableHeading } from './TableHeading';

// types
type MatrixEvents = (e, { x, y }: { x: number; y: number }) => void;

const getGridStyle = (x, y, cellSize = 0) => ({
  display: 'inline-grid',
  '--cell-size': cellSize === 0 ? 'initial' : `${cellSize}px`,
  gridTemplateRows: `repeat(${y}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
  gridTemplateColumns: `repeat(${x}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
});

const isSelected = (selected?: number) => (current: number) => selected === current;

interface AxisControlProps {
  legend: (angle: number) => React.ReactElement | null;
  angle?: number;
  onHover?: MatrixEvents;
  onClick?: MatrixEvents;
  onMouseOut?: (e) => void;
  cellSize?: number;
  table: {
    x: TableHeading[];
    y: TableHeading[];
    matrix: (number | null)[][];
    selectedCell?: { x: number; y: number };
    hoveredCell?: { x: number; y: number };
  };
}

export const AxisControl = ({
  legend,
  angle = 0,
  table,
  onHover,
  onClick,
  onMouseOut,
  cellSize = 0,
}: AxisControlProps) => {
  const checkIsFromSelectedCol = isSelected(table.selectedCell?.x);
  const checkIsFromSelectedRow = isSelected(table.selectedCell?.y);
  const checkIsFromHoveredCol = isSelected(table.hoveredCell?.x);
  const checkIsFromHoveredRow = isSelected(table.hoveredCell?.y);

  return (
    <div>
      <style>--cell-side: 65px;</style>
      <div style={getGridStyle(table.x.length + 1, table.y.length + 1, cellSize)}>
        <TableHeading entries={table.x} vertical />
        <div className={styles.legendSlot}>{legend(angle)}</div>
        <TableHeading entries={table.y} />

        {table.matrix.map((row, rowIndex) =>
          row.map((val, colIndex) => {
            const isFromSelectedRow = checkIsFromSelectedRow(rowIndex);
            const isFromSelectedCol = checkIsFromSelectedCol(colIndex);
            const isHovered = checkIsFromHoveredRow(rowIndex) || checkIsFromHoveredCol(colIndex);
            const call = attachPositionToCb({ x: colIndex, y: rowIndex });
            const getCellPosition = setOffset(0, 1);
            const cellClasses = {
              [styles.hoveredCell]: isHovered,
              [styles.selectedCol]: checkIsFromSelectedCol(colIndex),
              [styles.selectedRow]: checkIsFromSelectedRow(rowIndex),
            };

            return val === null ? (
              <Cell
                className={clsx(cellClasses)}
                key={val ?? `${colIndex}|${rowIndex}`}
                positionX={getCellPosition.col(colIndex)}
                positionY={getCellPosition.row(rowIndex)}
                value={val}
                disabled
              >
                <span></span>
              </Cell>
            ) : (
              <Cell
                selected={isFromSelectedRow && isFromSelectedCol}
                className={clsx(cellClasses)}
                key={val ?? `${colIndex}|${rowIndex}`}
                onClick={call(onClick)}
                onHover={call(onHover)}
                onMouseOut={onMouseOut}
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
};
