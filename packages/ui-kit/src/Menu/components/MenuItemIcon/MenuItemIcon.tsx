import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react';
import { AccessibilityAttributes } from '../../../utils/accessibility';
import cn from 'clsx';
import styles from './MenuItemIcon.module.css';
import { ComponentWithFactory, NodeValue } from '../../../utils/types';
import { nanoid } from 'nanoid';

interface MenuItemIconProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  accessibility?: AccessibilityAttributes;

  /** Indicates if the parent menu item may have just icons. */
  iconOnly?: boolean;

  /** Indicates if the parent menu item has content. */
  hasContent?: boolean;

  className?: string;
  children?: ReactNode;
  style?: CSSProperties | undefined;
}

const MenuItemIconComponent = forwardRef<HTMLSpanElement, MenuItemIconProps>(
  ({ accessibility, className, children, hasContent, iconOnly, style }: MenuItemIconProps, ref) => {
    const dynamicClasses = cn({
      [styles.menuItemIcon]: true,
      [styles.hasContent]: hasContent,
      [styles.notIconOnly]: !iconOnly,
      className,
    });

    return (
      <span {...accessibility} className={dynamicClasses} ref={ref} style={style}>
        {children}
      </span>
    );
  },
);

MenuItemIconComponent.displayName = 'MenuItemIcon';

export const MenuItemIcon = MenuItemIconComponent as ComponentWithFactory<
  typeof MenuItemIconComponent,
  MenuItemIconProps,
  NodeValue<unknown>
>;

/** MenuItemIcon fabric. */
MenuItemIcon.create = (
  content: NodeValue<unknown>,
  props: MenuItemIconProps & { ref?: ForwardedRef<HTMLSpanElement> } = {},
  generateKey = false,
) => {
  if (generateKey) {
    props['key'] = nanoid(4);
  }
  return <MenuItemIcon {...props}>{content}</MenuItemIcon>;
};
