import { forwardRef } from 'react';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import { SelectItemType } from '../../types';
import cn from 'clsx';
import style from './style.module.css';
import { ArrowRight24, Finish24 } from '@konturio/default-icons';

export interface SelectItemProps {
  className?: string;
  itemProps: any;
  item: SelectItemType;
  title?: string;
  highlighted?: boolean;
  selected?: boolean;
  showSelectedIcon?: boolean;
  showEntryIcon?: boolean;
}

export const SelectItem = forwardRef(
  (
    { className, highlighted, selected, item, title, itemProps, showSelectedIcon = true, showEntryIcon = false },
    ref,
  ) => {
    const dynamicClasses = cn({
      [style.selectItem]: true,
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
) as ForwardRefComponent<'li', SelectItemProps>;

SelectItem.displayName = 'SelectItem';
