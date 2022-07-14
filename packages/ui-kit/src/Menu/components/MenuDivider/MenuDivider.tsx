import { ForwardedRef, forwardRef, ReactNode } from 'react';

import { AccessibilityAttributes } from '../../../utils/accessibility';
import { MenuContext, MenuDividerSubscribedValue } from '../../menuContext';
import cn from 'clsx';
import { useContextSelectors } from '../../../utils/context/useContextSelectors';
import styles from './MenuDivider.module.css';
import { ComponentWithFactory, NodeValue } from '../../../utils/types';
import { nanoid } from 'nanoid';

interface MenuDividerProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: AccessibilityAttributes;

  inSubmenu?: boolean;
  secondary?: boolean;
  pills?: boolean;
  pointing?: boolean | 'start' | 'end';
  primary?: boolean;
  vertical?: boolean;
  className?: string;
  children?: ReactNode;
}

const MenuDividerComponent = forwardRef<HTMLLIElement, MenuDividerProps>((dividerProps: MenuDividerProps, ref) => {
  const parentProps = useContextSelectors(MenuContext, {
    divider: (v) => v.slotProps.divider,
    accessibility: (v) => v.behaviors.divider,
  }) as MenuDividerSubscribedValue;

  const props = {
    ...parentProps.divider,
    ...dividerProps,
    accessibility: parentProps.accessibility
      ? { ...parentProps.accessibility, ...dividerProps.accessibility }
      : dividerProps.accessibility,
  };

  const {
    accessibility = { role: 'presentation' },
    children,
    vertical,
    inSubmenu,
    pills,
    pointing,
    primary,
    className,
    secondary,
  } = props;

  const dynamicClasses = cn({
    [styles.menuDivider]: true,
    [styles.withoutContent]: !children,
    [styles.hasContent]: !!children,
    [styles.pills]: pills,
    [styles.pointing]: pointing,
    [styles.horizontal]: !vertical,
    [styles.vertical]: vertical,
    [styles.inSubmenu]: inSubmenu,
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    className,
  });

  return (
    <li className={dynamicClasses} ref={ref} {...accessibility}>
      {children}
    </li>
  );
});

MenuDividerComponent.displayName = 'MenuDivider';

export const MenuDivider = MenuDividerComponent as ComponentWithFactory<
  typeof MenuDividerComponent,
  MenuDividerProps,
  NodeValue<unknown>
>;

/** MenuDivider fabric. */
MenuDivider.create = (
  content: NodeValue<unknown>,
  props: MenuDividerProps & { ref?: ForwardedRef<HTMLLIElement> } = {},
  generateKey = false,
) => {
  if (generateKey) {
    props['key'] = nanoid(4);
  }
  return <MenuDivider {...props}>{content}</MenuDivider>;
};
