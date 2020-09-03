import React from 'react';
import cn from 'clsx';
import s from './style.module.css';
import { Cell } from './types';
import { getRotationStyle } from './styleGen';
import { fillTemplate } from './gridTemplate';

type Axis = {
  label: string;
  steps: { label: string; value: number }[];
  quality: number;
  quotient: string[];
};

export interface Legend {
  cells: Cell[];
  size: number;
  angle?: number;
  axis: {
    x: Axis;
    y: Axis;
  };
}

// eslint-disable-next-line prettier/prettier
const TEMPLATE = [
  'y . . . .',
  'y c c c .',
  'y c c c .',
  'y c c c .',
  '. x x x x'
];

function safeReverse(arr) {
  return [...arr].reverse();
}

const getCellPositionStyle = (col: number, row: number) => ({
  gridColumn: `${col + 1} / ${col + 2}`,
  gridRow: `${row + 1} / ${row + 2}`,
});

export function Legend({ cells, size, angle = 0, axis }: Legend) {
  const labelRotationStyle = getRotationStyle(angle * -1);

  const gridCells = fillTemplate(TEMPLATE, {
    x: axis.x.steps.map((step) => ({
      label: step.label || step.value.toFixed(1),
      className: s.xStepsCell,
    })),
    y: safeReverse(axis.y.steps).map((step) => ({
      label: step.label || step.value.toFixed(1),
      className: s.yStepsCell,
    })),
    c: cells.map((cell) => ({
      label: <span style={labelRotationStyle}>{cell.label}</span>,
      className: cn(s.cell, s.colorCell),
      style: { backgroundColor: cell.color },
    })),
  });

  return (
    <div
      className={s.grid}
      style={{
        gridTemplateColumns: `repeat(${size + 2}, 1fr)`,
        gridTemplateRows: `repeat(${size + 2}, 1fr)`,
      }}
    >
      <div className={s.arrowX}></div>
      <div className={s.arrowY}></div>

      {gridCells.map((cell) => (
        <div
          key={`${cell._position.x}|${cell._position.y}`}
          style={Object.assign(getCellPositionStyle(cell._position.x, cell._position.y), cell.style)}
          className={cn(cell.className, s.cell)}
        >
          { cell.label }
        </div>
      ))}
    </div>
  );
}
