import {ComponentClass, createElement, FunctionComponent, ReactNode} from 'react';
import cn from 'clsx';
import styles from './DropdownHeader.module.css';

interface DropdownHeaderProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Icon. */
  icon: FunctionComponent | ComponentClass | string;
}

export function DropdownHeader({ children, className, icon }: DropdownHeaderProps) {
  const iconItem = icon ? createElement(icon) : undefined;

  return (
    <div className={cn(styles.header, className)}>
      {iconItem}
      {children}
    </div>
  );
}
