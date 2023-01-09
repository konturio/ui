import React from 'react';
import cn from 'clsx';
import { MenuItems } from '../MenuItem';
import { MenuPopover } from '../MenuPopover';
import style from './style.module.css';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

/**
 * MenuList
 */
export interface MenuListProps {
  portal?: boolean;
  children: React.ReactNode;
}

export const MenuList = React.forwardRef(({ portal = true, className, ...props }, forwardedRef) => {
  const dynamicClasses = cn({
    [style.menuList]: true,
    className,
  });

  return (
    <MenuPopover portal={portal}>
      <MenuItems {...props} ref={forwardedRef} className={dynamicClasses} />
    </MenuPopover>
  );
}) as ForwardRefComponent<'div', MenuListProps>;

MenuList.displayName = 'MenuList';
