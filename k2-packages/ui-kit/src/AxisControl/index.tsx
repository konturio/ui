import React, { useCallback, useState } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';
import { attachPositionToCb } from './matrixFn';
import { Cell } from './Cell';
import TableHeading from './TableHeading';

const getGridStyle = (x, y, cellSize = 0) => ({
  display: 'inline-grid',
  '--cell-size': cellSize === 0 ? 'initial' : `${cellSize}px`,
  gridTemplateRows: `repeat(${y}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
  gridTemplateColumns: `repeat(${x}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
});

const isSelected = (selected?: number | null) => (current: number) => selected === current;

const getCellPositionStyle = (col: number, row: number) => {
  return {
    gridColumn: `${col + 3} / ${col + 4}`,
    gridRow: `${row + 3} / ${row + 4}`,
  };
};

interface AxisControlProps {
  angle?: number;
  onSelectCell?: (
    e: React.MouseEvent<HTMLElement, MouseEvent> | null,
    postion: { x: number | null; y: number | null },
  ) => void;
  selectedCell?: { x: number | null; y: number | null };
  cellSize?: number;
  matrix: (number | null)[][];
  xHeadings: {
    label: string;
    selectedDenominator: { id: string; label?: string };
    quality?: number;
    denominators: { id: string; label?: string; quality?: number }[];
  }[];
  yHeadings: {
    label: string;
    selectedDenominator: { id: string; label?: string };
    quality?: number;
    denominators: { id: string; label?: string; quality?: number }[];
  }[];
  onSelectDenominator: (horisontal: boolean, index: number, denId: string) => void;
}

// auto-size calculation params
const LETTER_WIDTH_LOWER_CASE = 8;
const LETTER_WIDTH_UPPER_CASE = 12;
const HEIGHT_SHIFT = 25.5;

const isUpperCase = (letter: string) => {
  return letter.toUpperCase() === letter;
};

const calculateStringWidth = (str: string): number => {
  let strWidth = 0;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    strWidth += isUpperCase(letter) ? LETTER_WIDTH_UPPER_CASE : LETTER_WIDTH_LOWER_CASE;
  }

  return strWidth;
};

const calculateHeadingsStyle = (baseDimension: number, vertical: boolean, index: number) => {
  return vertical
    ? { height: `${baseDimension + index * HEIGHT_SHIFT}px` }
    : { width: `${baseDimension + index * HEIGHT_SHIFT}px` };
};

export const AxisControl = ({
  matrix,
  xHeadings,
  yHeadings,
  onSelectCell,
  selectedCell,
  cellSize = 0,
  onSelectDenominator,
}: AxisControlProps) => {
  const [hoveredCell, setHoveredCell] = useState<{ x: number | null; y: number | null }>({ x: -1, y: -1 });

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

  const onCellHoverX = useCallback(
    (cellIndex: number | null) => {
      setHoveredCell({ ...hoveredCell, x: cellIndex });
    },
    [setHoveredCell],
  );

  const onCellHoverY = useCallback(
    (cellIndex: number | null) => {
      setHoveredCell({ ...hoveredCell, y: cellIndex });
    },
    [setHoveredCell],
  );

  const onCellSelectX = useCallback(
    (cellIndex: number | null) => {
      onSelectCell && onSelectCell(null, { ...selectedCell, x: cellIndex } as any);
    },
    [onSelectCell, selectedCell],
  );

  const onCellSelectY = useCallback(
    (cellIndex: number | null) => {
      onSelectCell && onSelectCell(null, { ...selectedCell, y: cellIndex } as any);
    },
    [onSelectCell, selectedCell],
  );

  const selectDenominatorX = useCallback(
    (index: number, denId: string) => {
      onSelectDenominator(false, index, denId);
    },
    [onSelectDenominator],
  );

  const selectDenominatorY = useCallback(
    (index: number, denId: string) => {
      onSelectDenominator(true, index, denId);
    },
    [onSelectDenominator],
  );

  // calcucate base width of header item
  let baseDimension = 0;
  if (xHeadings && xHeadings.length && yHeadings && yHeadings.length) {
    let xLength = calculateStringWidth(xHeadings[0].label);
    for (let i = 1; i < xHeadings.length; i++) {
      const iStrWidth = calculateStringWidth(xHeadings[i].label);
      if (iStrWidth > xLength + i * HEIGHT_SHIFT) {
        xLength = iStrWidth - i * HEIGHT_SHIFT;
      }
    }
    let yLength = calculateStringWidth(yHeadings[0].label);
    for (let i = 1; i < yHeadings.length; i++) {
      const iStrWidth = calculateStringWidth(yHeadings[i].label);
      if (iStrWidth > yLength + i * HEIGHT_SHIFT) {
        yLength = iStrWidth - i * HEIGHT_SHIFT;
      }
    }

    baseDimension = xLength > yLength ? xLength : yLength;
  }

  return (
    <div className={styles.rotatedMatrix}>
      <div style={getGridStyle(xHeadings.length + 1, yHeadings.length + 1, cellSize)}>
        {matrix.map((row, rowIndex) => {
          return (
            <div
              key={`${rowIndex}_row_connector`}
              className={styles.horConnector}
              style={getCellPositionStyle(-1, rowIndex)}
            >
              <div
                className={clsx({
                  [styles.hovered]: checkIsFromHoveredRow(rowIndex),
                  [styles.selected]: checkIsFromSelectedRow(rowIndex),
                })}
              ></div>
            </div>
          );
        })}

        {matrix[0].map((col, colIndex) => {
          return (
            <div
              key={`${colIndex}_col_connector`}
              className={styles.vertConnector}
              style={getCellPositionStyle(colIndex, -1)}
            >
              <div
                className={clsx({
                  [styles.hovered]: checkIsFromHoveredCol(colIndex),
                  [styles.selected]: checkIsFromSelectedCol(colIndex),
                })}
              ></div>
            </div>
          );
        })}

        {matrix.map((row, rowIndex) =>
          row.map((val, colIndex) => {
            const isFromSelectedCol = checkIsFromSelectedCol(colIndex);
            const isFromSelectedRow = checkIsFromSelectedRow(rowIndex);
            const isHovered = checkIsFromHoveredRow(rowIndex) || checkIsFromHoveredCol(colIndex);
            const call = attachPositionToCb({ x: colIndex, y: rowIndex });
            const cellClasses = {
              [styles.hoveredCell]: isHovered,
              [styles.selectedCol]: isFromSelectedCol,
              [styles.selectedRow]: isFromSelectedRow,
              [styles.last]:
                (isFromSelectedRow && colIndex === row.length - 1) ||
                (isFromSelectedCol && rowIndex === matrix.length - 1),
              [styles.first]: (isFromSelectedRow && colIndex === 0) || (isFromSelectedCol && rowIndex === 0),
            };

            return val === null ? (
              <Cell
                className={clsx(cellClasses)}
                key={`${colIndex}|${rowIndex}`}
                style={getCellPositionStyle(colIndex, rowIndex)}
                value={val}
                disabled
              >
                <span></span>
              </Cell>
            ) : (
              <Cell
                selected={isFromSelectedRow && isFromSelectedCol}
                className={clsx(cellClasses)}
                key={`${colIndex}|${rowIndex}`}
                onClick={call(onSelectCell)}
                onHover={call(onMouseOver)}
                onMouseOut={onMouseOut}
                style={getCellPositionStyle(colIndex, rowIndex)}
                value={val}
              >
                <span className={styles.rotatedCell}>{val?.toFixed(3)}</span>
              </Cell>
            );
          }),
        )}

        <TableHeading
          selectedIndex={selectedCell?.y}
          hoveredIndex={hoveredCell.y}
          entries={yHeadings}
          onCellHover={onCellHoverY}
          onCellClick={onCellSelectY}
          onSelectDenominator={selectDenominatorY}
          baseDimension={baseDimension}
          calculateHeadingsStyle={calculateHeadingsStyle}
        />
        <TableHeading
          selectedIndex={selectedCell?.x}
          hoveredIndex={hoveredCell.x}
          entries={xHeadings}
          vertical
          onCellHover={onCellHoverX}
          onCellClick={onCellSelectX}
          onSelectDenominator={selectDenominatorX}
          baseDimension={baseDimension}
          calculateHeadingsStyle={calculateHeadingsStyle}
        />
      </div>
    </div>
  );
};
