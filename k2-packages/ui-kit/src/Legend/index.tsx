import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';
import { Cell } from './types';
import { getRotationStyle } from './styleGen';
import { fillTemplate } from './gridTemplate';

type Axis = {
  label: string;
  steps: { label?: string; value: number }[];
  quality: number;
  quotient: string[];
};

// eslint-disable-next-line prettier/prettier
const TEMPLATE = ['y . . . .', 'y c c c .', 'y c c c .', 'y c c c .', '. x x x x'];

function safeReverse(arr) {
  return [...arr].reverse();
}

const getCellPositionStyle = (col: number, row: number) => ({
  gridColumn: `${col + 1} / ${col + 2}`,
  gridRow: `${row + 1} / ${row + 2}`,
});

interface LegendProps {
  cells: Cell[];
  size: number;
  angle?: number;
  title?: string;
  showAxisLabels?: boolean;
  axis: {
    x: Axis;
    y: Axis;
  };
}

interface ArrowHeadProps {
  className?: string;
  type: 'vertical' | 'horizontal';
}

const ArrowHead = ({ className, type }: ArrowHeadProps) => (
  <div className={className}>
    {type === 'horizontal' ? (
      <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6,6L0,0l0,2.4L3.6,6L0,9.6L0,12L6,6z" fill="currentColor" />
      </svg>
    ) : (
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6,0L0,6l2.4,0L6,2.4L9.6,6L12,6L6,0z" fill="currentColor" />
      </svg>
    )}
  </div>
);

export const Legend = ({ cells, size, angle = 0, axis, title, showAxisLabels = false }: LegendProps) => {
  const labelRotationStyle = getRotationStyle(angle * -1);

  const gridCells = fillTemplate(TEMPLATE, {
    x: axis.x.steps.map((step) => ({
      label: step.label || step.value.toFixed(1),
      className: styles.xStepsCell,
    })),
    y: safeReverse(axis.y.steps).map((step) => ({
      label: step.label || step.value.toFixed(1),
      className: styles.yStepsCell,
    })),
    c: cells.map((cell) => ({
      label: <span style={labelRotationStyle}>{cell.label}</span>,
      className: clsx(styles.cell, styles.colorCell),
      style: { backgroundColor: cell.color },
    })),
  });

  return (
    <div>
      {title && <div className={styles.legendTitle}>{title}</div>}
      <div
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${size + 2}, auto)`,
          gridTemplateRows: `repeat(${size + 2}, auto)`,
        }}
      >
        {showAxisLabels && axis.x.label ? <div className={styles.axisLabelX}>{axis.x.label}</div> : null}
        {showAxisLabels && axis.y.label ? <div className={styles.axisLabelY}>{axis.y.label}</div> : null}

        <div className={styles.arrowX}>
          <ArrowHead type="horizontal" className={styles.arrowHeadX} />
        </div>
        <div className={styles.arrowY}>
          <ArrowHead
            type="vertical"
            className={clsx({ [styles.arrowHeadY]: true, [styles.arrowHeadY_angle0]: angle === 0 && !showAxisLabels })}
          />
        </div>

        {gridCells.map((cell) => (
          <div
            key={`${cell._position.x}|${cell._position.y}`}
            style={Object.assign(getCellPositionStyle(cell._position.x, cell._position.y), cell.style)}
            className={clsx(cell.className, styles.cell)}
          >
            {cell.label}
          </div>
        ))}
      </div>
    </div>
  );
};
