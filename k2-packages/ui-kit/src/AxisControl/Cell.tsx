import React from 'react';
import styles from './cell.module.css';
import clsx from 'clsx';

interface CellProps {
  positionX: number;
  positionY: number;
  className?: string;
  children?: React.ReactChild;
  onHover?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  value: number | null;
  selected?: boolean;
  disabled?: boolean;
}

const getCellPositionStyle = (col: number, row: number) => ({
  gridColumn: `${col + 1} / ${col + 2}`,
  gridRow: `${row + 1} / ${row + 2}`,
});

export const Cell = ({
  positionX,
  positionY,
  value,
  className,
  children,
  onHover,
  onMouseOut,
  onClick,
  disabled = false,
}: CellProps) => (
  <div
    className={clsx(styles.valueCell, className, disabled && styles.disabled)}
    style={getCellPositionStyle(positionX, positionY)}
    onMouseOver={onHover}
    onMouseOut={onMouseOut}
    onClick={onClick}
  >
    <div className={styles.valueFill} style={{ transform: `scale(${value === null ? 0 : Math.abs(value)})` }}></div>
    {/* <div className={s.valueFill} style={{ opacity: value === null ? 0 : Math.abs(value) }}></div> */}

    {children}
  </div>
);
