import React from 'react';
import cn from 'clsx';
import { MenuItemImpl } from '../MenuItem';
import { noop } from '../../../utils/helpers/helpers';
import style from './style.module.css';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import type { MenuItemImplProps } from '../MenuItem';

/**
 * MenuLink
 */
export type MenuLinkProps = Omit<MenuItemImplProps, 'isLink' | 'onSelect'> & {
  onSelect?(): void;
};

export const MenuLink = React.forwardRef(
  (
    {
      as = 'a',
      // @ts-ignore
      component,
      onSelect,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const dynamicClasses = cn({
      [style.menuLink]: true,
      className,
    });

    return (
      <MenuItemImpl
        {...props}
        ref={forwardedRef}
        as={as}
        isLink={true}
        onSelect={onSelect || noop}
        className={dynamicClasses}
      />
    );
  },
) as ForwardRefComponent<'a', MenuLinkProps>;

MenuLink.displayName = 'MenuLink';
