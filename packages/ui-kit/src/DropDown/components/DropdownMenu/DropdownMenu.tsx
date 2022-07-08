import { ReactNode } from 'react';
import cn from 'clsx';
import styles from './DropdownMenu.module.css';

interface DropdownMenuProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** A dropdown menu can open to the left or to the right. */
  direction?: 'left' | 'right';

  /** Whether or not the dropdown menu is displayed. */
  open?: boolean;

  /** A dropdown menu can scroll. */
  scrolling?: boolean;
}

export function DropdownMenu({ children, className, direction, open, scrolling }: DropdownMenuProps) {
  const dynamicStyles = cn({
    [styles.left]: direction === 'left',
    [styles.right]: direction === 'right',
    [styles.visible]: open,
    [styles.scrolling]: scrolling,
    [styles.menu]: true,
    [styles.transition]: true,
    className,
  });

  return <div className={dynamicStyles}>{children}</div>;
}
