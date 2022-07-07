import { ReactNode } from 'react';
import cn from 'clsx';
import styles from './style.module.css';

export interface DividerProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Divider can clear the content above it. */
  clearing?: boolean;

  /** Divider can be fitted without any space above or below it. */
  fitted?: boolean;

  /** Divider can divide content without creating a dividing line. */
  hidden?: boolean;

  /** Divider can segment content horizontally or vertically. */
  type?: 'horizontal' | 'vertical';
}

export function Divider({ children, className, clearing, fitted, hidden, type }: DividerProps) {
  const dynamicClasses = cn({
    className,
    [styles.divider]: true,
    [styles.clearing]: clearing,
    [styles.fitted]: fitted,
    [styles.hidden]: hidden,
    [styles.horizontal]: type === 'horizontal',
    [styles.vertical]: type === 'vertical',
    [styles.withoutChildren]: !children,
  });

  return <div className={dynamicClasses}>{children && <div className={styles.dividerContent}>{children}</div>}</div>;
}
