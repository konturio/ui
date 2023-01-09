import React from 'react';
import cn from 'clsx';
import { useDropdownItem } from '../../../Dropdown';
import { useDropdownItems } from '../../../Dropdown';
import style from './style.module.css';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

export interface MenuItemImplProps {
  children: React.ReactNode;
  onSelect(): void;
  index?: number;
  isLink?: boolean;
  valueText?: string;
  disabled?: boolean;
}

export const MenuItemImpl = React.forwardRef(({ as: Comp = 'div', className, ...rest }, forwardedRef) => {
  const {
    data: { disabled },
    props,
  } = useDropdownItem({ ...rest, ref: forwardedRef });

  const dynamicClasses = cn({
    [style.menuItem]: true,
    [style.disabled]: disabled,
    [style.selected]: props.selected,
    className,
  });

  return <Comp role="menuitem" {...props} aria-disabled={disabled || undefined} className={dynamicClasses} />;
}) as ForwardRefComponent<'div', MenuItemImplProps>;

MenuItemImpl.displayName = 'MenuItemImpl';

/**
 * MenuItem
 */
export type MenuItemProps = Omit<MenuItemImplProps, 'isLink'>;

export const MenuItem = React.forwardRef(({ as = 'div', ...props }, forwardedRef) => {
  return <MenuItemImpl {...props} ref={forwardedRef} as={as} />;
}) as ForwardRefComponent<'div', MenuItemProps>;

MenuItem.displayName = 'MenuItem';

/**
 * MenuItems
 */
export interface MenuItemsProps {
  children: React.ReactNode;
}

export const MenuItems = React.forwardRef(({ as: Comp = 'div', className, ...rest }, forwardedRef) => {
  const {
    data: { activeDescendant, triggerId },
    props,
  } = useDropdownItems({ ...rest, ref: forwardedRef });

  const dynamicClasses = cn({
    [style.menuItems]: true,
    className,
  });

  return (
    <Comp
      aria-activedescendant={activeDescendant}
      aria-labelledby={triggerId || undefined}
      role="menu"
      className={dynamicClasses}
      {...props}
    />
  );
}) as ForwardRefComponent<'div', MenuItemsProps>;

MenuItems.displayName = 'MenuItems';
