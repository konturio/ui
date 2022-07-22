import React, { forwardRef } from 'react';
import { SelectButton, SelectButtonClasses } from './components/SelectButton';
import { useSelect } from 'downshift';
import { SelectItem } from './types';
import cn from 'clsx';
import style from './style.module.css';
import { ForwardRefComponent } from '../utils/component-helpers/polymorphic';

export interface SelectProps {
  items: SelectItem[];
  itemToString?: (item: SelectItem | null) => string;
  label?: string | React.ReactChild | React.ReactChild[];
  placeholder?: string;
  classes?: {
    button?: SelectButtonClasses;
    menu?: string;
    menuItem?: string;
  };
}

export const Select = forwardRef(({ items, itemToString, label, placeholder, classes, className, ...props }, ref) => {
  const { isOpen, selectedItem, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps } =
    useSelect({
      items,
      itemToString,
    });

  return (
    <div
      ref={ref}
      className={cn({
        [style.select]: true,
        className,
      })}
      {...props}
    >
      <SelectButton
        value={selectedItem}
        labelProps={getLabelProps()}
        toggleProps={getToggleButtonProps()}
        label={label}
        placeholder={placeholder}
        open={isOpen}
      />
      <ul {...getMenuProps()} className={cn({ [style.menu]: true, [classes?.menu || '']: classes?.menu })}>
        {isOpen &&
          items.map((item, index) => (
            <li
              className={cn({
                [style.menuItem]: true,
                [classes?.menuItem || '']: classes?.menuItem,
                [style.highlighted]: highlightedIndex === index,
                [style.selected]: selectedItem === item,
              })}
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}) as ForwardRefComponent<'div', SelectProps>;

Select.displayName = 'Select';
