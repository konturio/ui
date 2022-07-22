import { forwardRef } from 'react';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import { SelectItemType } from '../../types';
import cn from 'clsx';
import style from './style.module.css';

export interface SelectItemProps {
  className?: string;
  itemProps: any;
  item: SelectItemType;
  highlighted?: boolean;
  selected?: boolean;
}

export const SelectItem = forwardRef(({ className, highlighted, selected, item, itemProps }, ref) => {
  const dynamicClasses = cn({
    [style.selectItem]: true,
    [style.highlighted]: !item.disabled && highlighted,
    [style.selected]: !item.disabled && selected,
    [style.disabled]: item.disabled,
    [style.hasDivider]: item.hasDivider,
  });

  return (
    <li className={dynamicClasses} ref={ref} {...(!item.disabled ? itemProps : {})}>
      <span>{item.title}</span>
    </li>
  );
}) as ForwardRefComponent<'li', SelectItemProps>;

SelectItem.displayName = 'SelectItem';
