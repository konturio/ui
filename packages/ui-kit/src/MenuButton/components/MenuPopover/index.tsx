import React from 'react';
import cn from 'clsx';
import { useDropdownPopover } from '../../../Dropdown';
import { Popover } from '../../../Popover';
import style from './style.module.css';
import type { Position } from '../../../utils/position/position';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

/**
 * MenuPopover
 */
export interface MenuPopoverProps {
  children: React.ReactNode;
  portal?: boolean;
  position?: Position;
}

export const MenuPopover = React.forwardRef(({ as: Comp = 'div', className, ...rest }, forwardedRef) => {
  const {
    data: { portal, targetRef, position },
    props,
  } = useDropdownPopover({ ...rest, ref: forwardedRef });

  const dynamicClasses = cn({
    [style.menuPopover]: true,
    [style.hidden]: props.hidden,
    className,
  });

  return portal ? (
    <Popover {...props} as={Comp} targetRef={targetRef as any} position={position} className={dynamicClasses} />
  ) : (
    <Comp {...props} className={dynamicClasses} />
  );
}) as ForwardRefComponent<'div', MenuPopoverProps>;

MenuPopover.displayName = 'MenuPopover';
