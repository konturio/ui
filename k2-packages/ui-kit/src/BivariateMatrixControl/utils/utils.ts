import { BIVARIATE_MATRIX_HEIGHT_SHIFT, BIVARIATE_MATRIX_WIDTH_SHIFT } from '../constants';

export function setOffset(offsetX = 0, offsetY = 0) {
  return {
    col: (index: number) => index + offsetX,
    row: (index: number) => index + offsetY,
  };
}

export function getGridStyle(x, y, cellSize = 0) {
  return {
    display: 'inline-grid',
    '--cell-size': cellSize === 0 ? 'initial' : `${cellSize}px`,
    gridTemplateRows: `repeat(${y}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
    gridTemplateColumns: `repeat(${x}, ${cellSize === 0 ? 'auto' : cellSize + 'px'})`,
  };
}

export function getCellPositionStyle(col: number, row: number) {
  return {
    gridColumn: `${col + 3} / ${col + 4}`,
    gridRow: `${row + 3} / ${row + 4}`,
  };
}

// text width measure hack
const canvas = document.createElement('canvas');
const context: any = canvas.getContext('2d') || {};
context.font = 'normal 13px Roboto';

export function calculateStringWidth(str: string): number {
  // coeff 0.85 here is because of transform: scale(0.85) applied to matrix
  return (context.measureText(str).width + 80) / 0.85;
}

export function calculateHeadingsStyle(baseDimension: number, vertical: boolean, index: number) {
  return vertical
    ? { height: `${baseDimension + index * BIVARIATE_MATRIX_HEIGHT_SHIFT}px` }
    : { width: `${baseDimension + index * BIVARIATE_MATRIX_WIDTH_SHIFT}px` };
}
