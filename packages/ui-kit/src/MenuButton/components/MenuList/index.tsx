import React from 'react';
import { MenuItems } from '../MenuItem';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import { MenuPopover } from '../MenuPopover';
import cn from 'clsx';
import style from './style.module.css';

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
