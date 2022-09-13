import React from 'react';
import { isFragment } from 'react-is';
import { DropdownProviderContainer, useDropdownContext } from '../../../Dropdown';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import cn from 'clsx';
import style from './style.module.css';

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
