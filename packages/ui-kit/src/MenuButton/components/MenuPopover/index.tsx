import React from 'react';
import { Position } from '../../../utils/position/position';
import { useDropdownPopover } from '../../../Dropdown/components/DropdownPopover';
import { Popover } from '../../../Popover';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import cn from 'clsx';
import style from './style.module.css';

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
