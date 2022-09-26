import { forwardRef } from 'react';
import { ArrowRight24, Finish24 } from '@konturio/default-icons';
import cn from 'clsx';
import style from './style.module.css';
import type { AutocompleteItemType } from '../../types';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

export interface AutocompleteItemProps {
  className?: string;
  itemProps: any;
  item: AutocompleteItemType;
  title?: string;
  highlighted?: boolean;
  selected?: boolean;
  showSelectedIcon?: boolean;
  showEntryIcon?: boolean;
}

export const AutocompleteItem = forwardRef(
  (
    { className, highlighted, selected, item, title, itemProps, showSelectedIcon = true, showEntryIcon = false },
    ref,
  ) => {
    const dynamicClasses = cn({
      [style.autocompleteItem]: true,
      [style.highlighted]: !item.disabled && highlighted,
      [style.selected]: !item.disabled && selected,
      [style.disabled]: item.disabled,
      [style.hasDivider]: item.hasDivider,
      className,
    });

    return (
      <li className={dynamicClasses} ref={ref} {...(!item.disabled ? itemProps : {})}>
        <span className={style.titleContainer}>
          {showEntryIcon && (
            <span className={style.entryIconContainer}>
              <ArrowRight24 />
            </span>
          )}
          {title || item.title}
        </span>
        {showSelectedIcon && !item.disabled && selected ? (
          <span className={style.selectedIconContainer}>
            <Finish24 />
          </span>
        ) : null}
      </li>
    );
  },
) as ForwardRefComponent<'li', AutocompleteItemProps>;

AutocompleteItem.displayName = 'AutocompleteItem';
