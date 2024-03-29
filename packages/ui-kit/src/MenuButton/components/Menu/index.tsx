import React from 'react';
import { isFragment } from 'react-is';
import cn from 'clsx';
import { DropdownProviderContainer, useDropdownContext } from '../../../Dropdown';
import style from './style.module.css';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

export interface MenuProps {
  children:
    | React.ReactNode
    | ((
        props: MenuContextValue & {
          isOpen: boolean;
        },
      ) => React.ReactNode);
  id?: string;
}

export interface MenuContextValue {
  isExpanded: boolean;
}

export function useMenuButtonContext(): MenuContextValue {
  const {
    state: { isExpanded },
  } = useDropdownContext('useMenuButtonContext');
  return React.useMemo(() => ({ isExpanded }), [isExpanded]);
}

export const Menu = React.forwardRef(
  ({ as: Comp = React.Fragment, id, children, className, ...rest }, forwardedRef) => {
    const parentIsFragment = React.useMemo(() => {
      try {
        return isFragment(<Comp />);
      } catch (err) {
        return false;
      }
    }, [Comp]);

    const props = parentIsFragment
      ? {}
      : {
          ref: forwardedRef,
          id,
          className: cn({
            [style.menu]: true,
            className,
          }),
          ...rest,
        };

    return (
      <Comp {...props}>
        <DropdownProviderContainer id={id}>{children}</DropdownProviderContainer>
      </Comp>
    );
  },
) as ForwardRefComponent<any, MenuProps>;

Menu.displayName = 'Menu';
