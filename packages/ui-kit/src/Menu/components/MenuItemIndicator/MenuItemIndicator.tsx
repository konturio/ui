import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react';
import { ComponentWithFactory, NodeValue } from '../../../utils/types';
import { nanoid } from 'nanoid';
import { AccessibilityAttributes } from '../../../utils/accessibility';
import cn from 'clsx';
import styles from './MenuItemIndicator.module.css';

interface MenuItemIndicatorProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: AccessibilityAttributes;

  /** Indicates if the parent menu item may have just icons. */
  iconOnly?: boolean;

  /** Indicates whether the parent menu item is inside vertical menu. */
  vertical?: boolean;

  /** Indicates whether the parent menu item is part of submenu. */
  inSubmenu?: boolean;

  /** Indicates whether the parent menu item is active. */
  active?: boolean;

  /** Indicates whether the parent menu item is primary. */
  primary?: boolean;

  /** Indicates whether the parent menu item is underlined. */
  underlined?: boolean;

  className?: string;
  children?: ReactNode;
  style?: CSSProperties | undefined;
}

const MenuItemIndicatorComponent = forwardRef<HTMLSpanElement, MenuItemIndicatorProps>(
  (
    {
      accessibility = { role: 'img', 'aria-hidden': 'true' },
      className,
      children,
      iconOnly,
      vertical,
      inSubmenu,
      active,
      primary,
      underlined,
      style,
    }: MenuItemIndicatorProps,
    ref,
  ) => {
    const dynamicClasses = cn({
      [styles.menuItemIndicator]: true,
      [styles.iconOnly]: iconOnly,
      [styles.verical]: vertical,
      [styles.horizontal]: !vertical,
      [styles.inSubmenu]: inSubmenu,
      [styles.active]: active,
      [styles.primary]: primary,
      [styles.underlined]: underlined,
      menuItemIndicatorClass: true,
      className,
    });

    return (
      <span {...accessibility} className={dynamicClasses} ref={ref} style={style}>
        {children}
      </span>
    );
  },
);

MenuItemIndicatorComponent.displayName = 'MenuItemIndicator';

export const MenuItemIndicator = MenuItemIndicatorComponent as ComponentWithFactory<
  typeof MenuItemIndicatorComponent,
  MenuItemIndicatorProps,
  NodeValue<unknown>
>;

/** MenuItemIndicator fabric. */
MenuItemIndicator.create = (
  content: NodeValue<unknown>,
  props: MenuItemIndicatorProps & { ref?: ForwardedRef<HTMLSpanElement> } = {},
  generateKey = false,
) => {
  if (generateKey) {
    props['key'] = nanoid(4);
  }
  return <MenuItemIndicator {...props}>{content}</MenuItemIndicator>;
};
