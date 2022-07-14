import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react';
import { AccessibilityAttributes } from '../../../utils/accessibility';
import { ComponentWithFactory, NodeValue } from '../../../utils/types';
import { nanoid } from 'nanoid';
import cn from 'clsx';
import styles from './MenuWrapper.module.css';

interface MenuItemWrapperProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  accessibility?: AccessibilityAttributes;

  /** A menu item wrapper can be active. */
  active?: boolean;

  /** A menu item wrapper can show it is currently unable to be interacted with. */
  disabled?: boolean;

  /** A menu item wrapper may have just icons. */
  iconOnly?: boolean;

  /** Indicates whether the last event was from keyboard. */
  isFromKeyboard?: boolean;

  /** A menu item wrapper can adjust its appearance to de-emphasize its contents. */
  pills?: boolean;

  /**
   * A menu can point to show its relationship to nearby content.
   * For vertical menu, it can point to the start of the item or to the end.
   */
  pointing?: boolean | 'start' | 'end';

  /** The menu item wrapper can have primary type. */
  primary?: boolean;

  /** The menu item wrapper can have secondary type. */
  secondary?: boolean;

  /** Menu items wrapper can by highlighted using underline. */
  underlined?: boolean;

  /** A vertical menu displays elements vertically. */
  vertical?: boolean;

  /** Menu can be set to open on hover */
  on?: 'hover';

  className?: string;
  children?: ReactNode;
  style?: CSSProperties | undefined;
}

const MenuItemWrapperComponent = forwardRef<HTMLLIElement, MenuItemWrapperProps>(
  (
    {
      accessibility,
      className,
      children,
      active,
      disabled,
      iconOnly,
      isFromKeyboard,
      pills,
      pointing,
      secondary,
      underlined,
      vertical,
      primary,
      on,
      style,
    }: MenuItemWrapperProps,
    ref,
  ) => {
    const dynamicClasses = cn({
      [styles.menuWrapper]: true,
      [styles.active]: active,
      [styles.disabled]: disabled,
      [styles.iconOnly]: iconOnly,
      [styles.isFromKeyboard]: isFromKeyboard,
      [styles.pills]: pills,
      [styles.secondary]: secondary,
      [styles.underlined]: underlined,
      [styles.vertical]: vertical,
      [styles.primary]: primary,
      [styles.onHover]: on === 'hover',
      [styles.pointing]: pointing,
      [styles.pointingStart]: pointing === 'start',
      [styles.pointingEnd]: pointing === 'end',
      className,
    });

    return (
      <li {...accessibility} className={dynamicClasses} ref={ref} style={style}>
        {children}
      </li>
    );
  },
);

MenuItemWrapperComponent.displayName = 'MenuItemWrapper';

export const MenuItemWrapper = MenuItemWrapperComponent as ComponentWithFactory<
  typeof MenuItemWrapperComponent,
  MenuItemWrapperProps,
  NodeValue<unknown>
>;

/** MenuItemWrapper fabric. */
MenuItemWrapper.create = (
  content: NodeValue<unknown>,
  props: MenuItemWrapperProps & { ref?: ForwardedRef<HTMLLIElement> } = {},
  generateKey = false,
) => {
  if (generateKey) {
    props['key'] = nanoid(4);
  }
  return <MenuItemWrapper {...props}>{content}</MenuItemWrapper>;
};
