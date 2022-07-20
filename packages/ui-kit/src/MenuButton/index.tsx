import React from 'react';
import { isFragment } from 'react-is';
import { DropdownProviderContainer } from '../Dropdown/components/DropdownProviderContainer';
import { ForwardRefComponent } from '../utils/component-helpers/polymorphic';
import { useDropdownTrigger } from '../Dropdown/components/DropdownTrigger';
import { useDropdownContext } from '../Dropdown/context';
import cn from 'clsx';
import style from './style.module.css';

/**
 * Menu
 */
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

/**
 * MenuButton
 */
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

export interface MenuContextValue {
  isExpanded: boolean;
}

export function useMenuButtonContext(): MenuContextValue {
  const {
    state: { isExpanded },
  } = useDropdownContext('useMenuButtonContext');
  return React.useMemo(() => ({ isExpanded }), [isExpanded]);
}
