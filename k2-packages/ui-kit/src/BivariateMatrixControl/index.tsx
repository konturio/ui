import { forwardRef, useCallback, useState } from 'react';
import styles from './style.module.css';
import cn from 'clsx';
import { calculateHeadingsStyle, calculateStringWidth, getCellPositionStyle, getGridStyle } from './utils/utils';
import { BIVARIATE_MATRIX_HEIGHT_SHIFT, BIVARIATE_MATRIX_WIDTH_SHIFT } from './constants';
import { BivariateMatrixHeading } from './components/BivariateMatrixHeading/BivariateMatrixHeading';
import { BivariateMatrixHeadingType, BivariateMatrixPositionType } from './types';
import { BivariateMatrixCell } from './components/BivariateMatrixCell/BivariateMatrixCell';

const isSelected = (selected?: number | null) => (current: number) => selected === current;

interface BivariateMatrixControlProps {
  angle?: number;
  onSelectCell?: (e: React.MouseEvent<HTMLElement, MouseEvent> | null, position: BivariateMatrixPositionType) => void;
  selectedCell?: BivariateMatrixPositionType;
  cellSize?: number;
  matrix: (number | null)[][];
  xHeadings: BivariateMatrixHeadingType[];
  yHeadings: BivariateMatrixHeadingType[];
  onSelectDenominator: (horizontal: boolean, index: number, numId, denId: string) => void;
}

export const BivariateMatrixControlComponent = forwardRef<HTMLDivElement | null, any>(
  (
    {
      matrix,
      xHeadings,
      yHeadings,
      onSelectCell,
      selectedCell,
      cellSize = 0,
      onSelectDenominator,
    }: BivariateMatrixControlProps,
    ref,
  ) => {
    const [hoveredCell, setHoveredCell] = useState<{ x: number | null; y: number | null }>({ x: -1, y: -1 });

    const onMouseOver = useCallback(
      (e: React.MouseEvent<HTMLElement, MouseEvent>, postion: { x: number; y: number }) => {
        setHoveredCell(postion);
      },
      [],
    );

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
      [setHoveredCell, hoveredCell],
    );

    const onCellHoverY = useCallback(
      (cellIndex: number | null) => {
        setHoveredCell({ ...hoveredCell, y: cellIndex });
      },
      [setHoveredCell, hoveredCell],
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
      (index: number, numId: string, denId: string) => {
        onSelectDenominator(false, index, numId, denId);
      },
      [onSelectDenominator],
    );

    const selectDenominatorY = useCallback(
      (index: number, numId: string, denId: string) => {
        onSelectDenominator(true, index, numId, denId);
      },
      [onSelectDenominator],
    );

    // calculate base width of header item
    let baseDimension = 0;
    if (xHeadings && xHeadings.length && yHeadings && yHeadings.length) {
      let xLength = calculateStringWidth(xHeadings[0].label);
      for (let i = 1; i < xHeadings.length; i++) {
        const iStrWidth = calculateStringWidth(xHeadings[i].label);
        const shift = i * BIVARIATE_MATRIX_HEIGHT_SHIFT;
        if (iStrWidth > xLength + shift) {
          xLength = iStrWidth - shift;
        }
      }
      let yLength = calculateStringWidth(yHeadings[0].label);
      for (let i = 1; i < yHeadings.length; i++) {
        const iStrWidth = calculateStringWidth(yHeadings[i].label);
        const shift = i * BIVARIATE_MATRIX_WIDTH_SHIFT;
        if (iStrWidth > yLength + shift) {
          yLength = iStrWidth - shift;
        }
      }

      baseDimension = xLength > yLength ? xLength : yLength;
    }

    console.log('render matrix');

    return (
      <div ref={ref} base-dimension={baseDimension} className={styles.rotatedMatrix}>
        <div style={getGridStyle(xHeadings.length + 1, yHeadings.length + 1, cellSize)}>
          {matrix.map((row, rowIndex) => {
            return (
              <div
                key={`${rowIndex}_row_connector`}
                className={styles.horConnector}
                style={getCellPositionStyle(-1, rowIndex)}
              >
                <div
                  className={cn({
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
                  className={cn({
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
                <BivariateMatrixCell
                  x={colIndex}
                  y={rowIndex}
                  selected={isFromSelectedRow && isFromSelectedCol}
                  className={cn(cellClasses)}
                  key={`matrix_cell_${colIndex}_${rowIndex}`}
                  onClick={onSelectCell}
                  onHover={onMouseOver}
                  onMouseOut={onMouseOut}
                  style={getCellPositionStyle(colIndex, rowIndex)}
                  value={val}
                  disabled
                >
                  <span></span>
                </BivariateMatrixCell>
              ) : (
                <BivariateMatrixCell
                  x={colIndex}
                  y={rowIndex}
                  selected={isFromSelectedRow && isFromSelectedCol}
                  className={cn(cellClasses)}
                  key={`matrix_cell_${colIndex}_${rowIndex}`}
                  onClick={onSelectCell}
                  onHover={onMouseOver}
                  onMouseOut={onMouseOut}
                  style={getCellPositionStyle(colIndex, rowIndex)}
                  value={val}
                >
                  <span className={styles.rotatedCell}>{val?.toFixed(3)}</span>
                </BivariateMatrixCell>
              );
            }),
          )}

          <BivariateMatrixHeading
            selectedIndex={selectedCell?.y}
            hoveredIndex={hoveredCell.y}
            entries={yHeadings}
            onCellHover={onCellHoverY}
            onCellClick={onCellSelectY}
            onSelectDenominator={selectDenominatorY}
            baseDimension={baseDimension}
            calculateHeadingsStyle={calculateHeadingsStyle}
          />
          <BivariateMatrixHeading
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
  },
);

BivariateMatrixControlComponent.displayName = 'BivariateMatrixControl';
