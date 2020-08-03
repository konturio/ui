import { Cell } from './types';

export function createMatrix(cells: Cell[], rowSize = 3) {
  const matrix: Cell[][] = [[]];
  let currentRow = 0;

  cells.forEach((cell) => {
    if (matrix[currentRow].length === rowSize) {
      currentRow++;
      matrix[currentRow] = [];
    }

    matrix[currentRow].push(cell);
  });

  return matrix;
}
