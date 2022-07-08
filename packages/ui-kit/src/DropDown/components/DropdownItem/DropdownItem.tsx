import { ComponentClass, createElement, FunctionComponent, MouseEvent, ReactNode } from 'react';
import cn from 'clsx';
import styles from './DropDownItem.module.css';

interface DropdownItemProps {
  /** Style as the currently chosen item. */
  active?: boolean;

  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** A dropdown item can be disabled. */
  disabled: boolean;

  /** Icon. */
  icon?: FunctionComponent | ComponentClass | string;

  /**
   * Called on click.
   */
  onClick?: (ev: MouseEvent, val: boolean | number | string) => void;

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected?: boolean;

  /** Stored value. */
  value: boolean | number | string;
}

export function DropDownItem({
  active,
  children,
  className,
  disabled,
  icon,
  onClick,
  selected,
  value,
}: DropdownItemProps) {
  const dynamicClasses = cn({
    [styles.item]: true,
    [styles.active]: active,
    [styles.disabled]: disabled,
    [styles.selected]: selected,
    className,
  });

  const ariaOptions = {
    role: 'option',
    'aria-disabled': disabled,
    'aria-checked': active,
    'aria-selected': selected,
  };

  const clickHandler = (ev: MouseEvent) => {
    onClick && onClick(ev, value);
  };

  const iconItem = icon ? createElement(icon) : undefined;

  return (
    <div {...ariaOptions} className={dynamicClasses} onClick={onClick && clickHandler}>
      {iconItem}
      {children}
    </div>
  );
}
