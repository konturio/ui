import React from 'react';
import s from './cell.module.css';
import cn from 'clsx';

const getCellPositionStyle = (col: number, row: number) => ({
  gridColumn: `${col + 1} / ${col + 2}`,
  gridRow: `${row + 1} / ${row + 2}`,
});

export interface CellProps {
  positionX: number;
  positionY: number;
  className?: string;
  children?: React.ReactChild;
  onHover?: (e) => void;
  onClick?: (e) => void;
  value: number | null;
  selected?: boolean;
}

export function Cell({
  positionX,
  positionY,
  value,
  className,
  children,
  onHover,
  onClick,
  selected = false,
}: CellProps) {
  return (
    <div
      className={cn(s.valueCell, className)}
      style={getCellPositionStyle(positionX, positionY)}
      onMouseOver={onHover}
      onClick={onClick}
    >
      <div className={s.valueFill} style={{ opacity: value === null ? 0 : Math.abs(value) }}></div>
      {children}
    </div>
  );
}
