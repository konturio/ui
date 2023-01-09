import { useMemo } from 'react';
import cn from 'clsx';
import styles from './style.module.css';
import { fillTemplate } from './gridTemplate';
import type { Cell } from './types';

/* Divisor and denominator pair */
type Quotient = [string, string];

type Axis = {
  label: string;
  steps: { label?: string; value: number }[];
  quality: number;
  quotient: Quotient;
};

function safeReverse(arr) {
  return [...arr].reverse();
}

const getCellPositionStyle = (col: number, row: number) => ({
  gridColumn: `${col + 1} / ${col + 2}`,
  gridRow: `${row + 1} / ${row + 2}`,
});

export interface LegendProps {
  cells: Cell[];
  size: number;
  title?: string;
  showAxisLabels?: boolean;
  showSteps?: boolean;
  showArrowHeads?: boolean;
  axis: {
    x: Axis;
    y: Axis;
  };
  onCellPointerOver?: (e: MouseEvent, cell: Cell, i: number) => void;
  onCellPointerLeave?: (e: MouseEvent, cell: Cell, i: number) => void;
  renderXAxisLabel?: (axis: Axis, rootClassName: string) => JSX.Element;
  renderYAxisLabel?: (axis: Axis, rootClassName: string) => JSX.Element;
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

export const Legend = ({
  cells,
  size,
  axis,
  title,
  showAxisLabels = false,
  showSteps = true,
  showArrowHeads = true,
  onCellPointerOver,
  onCellPointerLeave,
  renderXAxisLabel,
  renderYAxisLabel,
}: LegendProps) => {
  const TEMPLATE = useMemo(
    () => [
      `y ${new Array(size + 1).fill('.').join(' ')}`,
      ...new Array(size).fill(`y ${new Array(size).fill('c').join(' ')} .`),
      `. ${new Array(size + 1).fill('x').join(' ')}`,
    ],
    [size],
  );

  const gridCells = fillTemplate(TEMPLATE, {
    x: showSteps
      ? axis.x.steps.map((step) => ({
          label: step.label || step.value.toFixed(1),
          className: styles.xStepsCell,
        }))
      : axis.x.steps.map((step) => ({
          label: '',
          className: styles.xStepsCellNoLabel,
        })),
    y: showSteps
      ? safeReverse(axis.y.steps).map((step) => ({
          label: step.label || step.value.toFixed(1),
          className: styles.yStepsCell,
        }))
      : safeReverse(axis.y.steps).map((step) => ({
          label: '',
          className: styles.yStepsCellNoLabel,
        })),
    c: cells.map((cell, i) => ({
      label: <span>{cell.label}</span>,
      className: cn(styles.cell, styles.colorCell),
      style: { backgroundColor: cell.color },
      ...(onCellPointerOver && { onPointerOver: (e: MouseEvent) => onCellPointerOver(e, cell, i) }),
      ...(onCellPointerLeave && { onPointerLeave: (e: MouseEvent) => onCellPointerLeave(e, cell, i) }),
    })),
  });

  const xAxisLabel = () =>
    renderXAxisLabel ? (
      renderXAxisLabel(axis.x, styles.axisLabelX)
    ) : (
      <div className={styles.axisLabelX}>{axis.x.label}</div>
    );

  const yAxisLabel = () =>
    renderYAxisLabel ? (
      renderYAxisLabel(axis.y, styles.axisLabelY)
    ) : (
      <div className={styles.axisLabelY}>{axis.y.label}</div>
    );

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
        {showAxisLabels && axis.x.label ? xAxisLabel() : null}
        {showAxisLabels && axis.y.label ? yAxisLabel() : null}

        <div className={styles.arrowX}>
          {showArrowHeads && <ArrowHead type="horizontal" className={styles.arrowHeadX} />}
        </div>
        <div className={styles.arrowY}>
          {showArrowHeads && (
            <ArrowHead
              type="vertical"
              className={cn({ [styles.arrowHeadY]: true, [styles.arrowHeadY_angle0]: !showAxisLabels })}
            />
          )}
        </div>

        {gridCells.map((cell) => (
          <div
            key={`${cell._position.x}|${cell._position.y}`}
            style={Object.assign(getCellPositionStyle(cell._position.x, cell._position.y), cell.style)}
            className={cn(cell.className, styles.cell)}
            onPointerOver={cell.onPointerOver}
            onPointerLeave={cell.onPointerLeave}
          >
            {cell.label}
          </div>
        ))}
      </div>
    </div>
  );
};
