import { forwardRef, ReactNode } from 'react';
import cn from 'clsx';
import styles from './DropDownItem.module.css';
import { Box } from '../../../Box';
import { Image } from '../../../Image';
import { AccessibilityAttributes } from '../../../utils/accessibility';
import { ComponentWithFactory, NodeValue } from '../../../utils/types';
import { nanoid } from 'nanoid';

interface DropdownItemProps {
  /** A dropdown item can be active. */
  active?: boolean;

  /** Item's accessibility props. */
  accessibility?: AccessibilityAttributes;

  /** Item's content. */
  content?: ReactNode;

  /** Item can show check indicator if selected. */
  checkable?: boolean;

  /** A slot for a checkable indicator. */
  checkableIndicator?: ReactNode;

  /** A dropdown item can show that it cannot be interacted with. */
  disabled?: boolean;

  /** Item's header. */
  header?: ReactNode;

  /** Item's image. */
  image?: string;

  /** Indicated whether the item has been set active by keyboard. */
  isFromKeyboard?: boolean;

  /**
   * Called on dropdown item click.
   *
   * @param event - React's original SyntheticEvent.
   */
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;

  /** A dropdown item can be selected if single selection Dropdown is used. */
  selected?: boolean;

  className?: string;

  classes?: {
    content?: string;
    header?: string;
    image?: string;
    checkableIndicator?: string;
    main?: string;
  };
}

const DropdownItemComponent = forwardRef<HTMLDivElement, DropdownItemProps>(
  (
    {
      active,
      accessibility,
      className,
      content,
      header,
      image,
      isFromKeyboard,
      checkable,
      checkableIndicator = {},
      selected,
      classes,
      onClick,
    }: DropdownItemProps,
    ref,
  ) => {
    const dynamicClasses = cn({
      [styles.item]: true,
      [styles.active]: active,
      [styles.fromKeyboard]: isFromKeyboard,
      [styles.selected]: selected,
      [styles.hasContent]: !!content,
      [styles.hasHeader]: !!header,
      className,
    });

    const contentElement = content ? Box.create(content, { className: cn(styles.content, classes?.content) }) : null;
    const headerElement = header ? Box.create(header, { className: cn(styles.header, classes?.header) }) : null;
    const endMediaElement =
      selected && checkable
        ? Box.create(checkableIndicator, {
            accessibility: { role: 'img', 'aria-hidden': 'true' },
            className: cn(styles.checkableIndicator, classes?.checkableIndicator),
          })
        : null;

    const imageElement = image
      ? Box.create(
          Image.create(image, {
            avatar: true,
            className: cn(styles.image, classes?.image),
          }),
          {
            className: styles.media,
          },
        )
      : null;

    return (
      <div ref={ref} className={dynamicClasses} onClick={onClick} {...accessibility}>
        {imageElement}

        <div className={cn(styles.main, classes?.main)}>
          {headerElement}
          {contentElement}
        </div>

        {endMediaElement}
      </div>
    );
  },
);

DropdownItemComponent.displayName = 'DropdownItem';

export const DropdownItem = DropdownItemComponent as ComponentWithFactory<
  typeof DropdownItemComponent,
  DropdownItemProps,
  NodeValue<unknown>
>;

/** Dropdown item fabric. */
DropdownItem.create = (
  header: NodeValue<unknown>,
  props: Omit<DropdownItemProps, 'header'> = {},
  generateKey = false,
) => {
  if (generateKey) {
    props['key'] = nanoid(4);
  }

  return <DropdownItem {...props} header={header} />;
};
