import styles from './cell.module.css';
import cn from 'clsx';

interface CellProps {
  className?: string;
  children?: React.ReactChild;
  onHover?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  value: number | null;
  selected?: boolean;
  disabled?: boolean;
  style?: Record<string, any>;
}

export const Cell = ({
  value,
  className,
  children,
  onHover,
  onMouseOut,
  onClick,
  disabled = false,
  style,
}: CellProps) => (
  <div
    className={cn(styles.valueCell, className, disabled && styles.disabled)}
    style={style}
    onMouseOver={onHover}
    onMouseOut={onMouseOut}
    onClick={onClick}
  >
    <div className={styles.valueFill} style={{ transform: `scale(${value === null ? 0 : Math.abs(value)})` }}></div>
    {/* <div className={s.valueFill} style={{ opacity: value === null ? 0 : Math.abs(value) }}></div> */}

    {children}
  </div>
);
