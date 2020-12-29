import React, { useCallback, useState } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';
import { attachPositionToCb, setOffset } from './matrixFn';
import { Cell } from './Cell';
import { TableHeading } from './TableHeading';

const getGridStyle = (x, y, cellSize = 0) => ({
  display: 'inline-grid',
  '--cell-size': cellSize === 0 ? 'initial' : `${cellSize}px`,
  gridTemplateRows: `repeat(${y}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
  gridTemplateColumns: `repeat(${x}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
});

const isSelected = (selected?: number) => (current: number) => selected === current;

interface AxisControlProps {
  legend: React.ReactElement | null;
  angle?: number;
  onSelectCell?: (x: number | undefined, y: number | undefined) => void;
  selectedCell?: { x: number | undefined; y: number | undefined };
  cellSize?: number;
  matrix: (number | null)[][];
  xHeadings: (string | React.ReactElement)[];
  yHeadings: (string | React.ReactElement)[];
}

export const AxisControl = ({
  legend,
  angle = 0,
  matrix,
  xHeadings,
  yHeadings,
  onSelectCell,
  selectedCell,
  cellSize = 0,
}: AxisControlProps) => {
  const [hoveredCell, setHoveredCell] = useState<{ x: number; y: number }>({ x: -1, y: -1 });

  const onMouseOver = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>, postion: { x: number; y: number }) => {
    setHoveredCell(postion);
  }, []);

  const onMouseOut = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setHoveredCell({ x: -1, y: -1 });
  }, []);

  const checkIsFromSelectedCol = isSelected(selectedCell?.x);
  const checkIsFromSelectedRow = isSelected(selectedCell?.y);
  const checkIsFromHoveredCol = isSelected(hoveredCell.x);
  const checkIsFromHoveredRow = isSelected(hoveredCell.y);

  return (
    <div>
      <style>--cell-side: 65px;</style>
      <div style={getGridStyle(xHeadings.length + 1, yHeadings.length + 1, cellSize)}>
        <TableHeading selectedIndex={selectedCell?.x} hoveredIndex={hoveredCell.x} entries={xHeadings} vertical />
        <div className={styles.legendSlot}>{legend}</div>
        <TableHeading selectedIndex={selectedCell?.y} hoveredIndex={hoveredCell.y} entries={yHeadings} />

        {matrix.map((row, rowIndex) =>
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
                (isFromSelectedRow && colIndex === 0) || (isFromSelectedCol && rowIndex === matrix.length - 1),
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
                onClick={call(onSelectCell)}
                onHover={call(onMouseOver)}
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
