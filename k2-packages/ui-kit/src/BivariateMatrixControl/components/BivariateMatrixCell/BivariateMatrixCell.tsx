import cn from 'clsx';
import styles from './BivariateMatrixCell.module.css';
import { useCallback } from 'react';

type BivariateCellMouseHandler = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  position: { x: number; y: number },
) => void;

interface CellProps {
  value: number | null;
  x: number;
  y: number;
  className?: string;
  children?: React.ReactChild;
  onHover?: BivariateCellMouseHandler;
  onClick?: BivariateCellMouseHandler;
  onMouseOut?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  selected?: boolean;
  disabled?: boolean;
  style?: Record<string, any>;
}

export const BivariateMatrixCell = ({
  value,
  x,
  y,
  className,
  children,
  onHover,
  onMouseOut,
  onClick,
  disabled = false,
  style,
}: CellProps) => {
  const clickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      onClick && onClick(e, { x, y });
    },
    [onClick, x, y],
  );

  const hoverHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      onHover && onHover(e, { x, y });
    },
    [onHover, x, y],
  );

  console.log('render cell');

  return (
    <div
      className={cn(styles.valueCell, className, disabled && styles.disabled)}
      style={style}
      onMouseOver={hoverHandler}
      onClick={clickHandler}
      onMouseOut={onMouseOut}
    >
      <div className={styles.valueFill} style={{ transform: `scale(${value === null ? 0 : Math.abs(value)})` }}></div>
      {children}
    </div>
  );
};
