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
  const selectedCellX = table.x.findIndex((headingItem) => headingItem.selected);
  const selectedCellY = table.y.findIndex((headingItem) => headingItem.selected);
  const hoveredCellX = table.x.findIndex((headingItem) => headingItem.hovered);
  const hoveredCellY = table.y.findIndex((headingItem) => headingItem.hovered);
  const checkIsFromSelectedCol = isSelected(selectedCellX);
  const checkIsFromSelectedRow = isSelected(selectedCellY);
  const checkIsFromHoveredCol = isSelected(hoveredCellX);
  const checkIsFromHoveredRow = isSelected(hoveredCellY);

  return (
    <div>
      <style>--cell-side: 65px;</style>
      <div style={getGridStyle(table.x.length + 1, table.y.length + 1, cellSize)}>
        <TableHeading entries={table.x} vertical />
        <div className={styles.legendSlot}>{legend(angle)}</div>
        <TableHeading entries={table.y} />

        {table.matrix.map((row, rowIndex) =>
          row.map((val, colIndex) => {
            const isFromSelectedCol = checkIsFromSelectedCol(colIndex);
            const isFromSelectedRow = checkIsFromSelectedRow(rowIndex);
            const isHovered = checkIsFromHoveredRow(rowIndex) || checkIsFromHoveredCol(colIndex);
            const call = attachPositionToCb({ x: colIndex, y: rowIndex });
            const getCellPosition = setOffset(0, 1);
            const cellClasses = {
              [styles.hoveredCell]: isHovered,
              [styles.selectedCol]: isFromSelectedCol,
              [styles.selectedRow]: isFromSelectedRow,
              [styles.last]:
                (isFromSelectedRow && colIndex === 0) || (isFromSelectedCol && rowIndex === table.matrix.length - 1),
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
