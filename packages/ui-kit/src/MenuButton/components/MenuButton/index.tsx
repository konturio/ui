import React from 'react';
import cn from 'clsx';
import { useDropdownTrigger } from '../../../Dropdown';
import style from './style.module.css';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

export interface MenuButtonProps {
  children: React.ReactNode;
}

export const MenuButton = React.forwardRef(({ as: Comp = 'button', className, ...rest }, forwardedRef) => {
  const {
    data: { isExpanded, controls },
    props,
  } = useDropdownTrigger({ ...rest, ref: forwardedRef });

  const dynamicClasses = cn({
    [style.menuButton]: true,
    className,
  });

  return (
    <Comp
      aria-expanded={isExpanded ? true : undefined}
      aria-haspopup
      aria-controls={controls}
      {...props}
      className={dynamicClasses}
    />
  );
}) as ForwardRefComponent<'button', MenuButtonProps>;

MenuButton.displayName = 'MenuButton';
