import React, { forwardRef } from 'react';
import { SelectButton, SelectButtonClasses } from './components/SelectButton';
import { useSelect, UseSelectStateChange } from 'downshift';
import { SelectItemType } from './types';
import cn from 'clsx';
import style from './style.module.css';
import { ForwardRefComponent } from '../utils/component-helpers/polymorphic';
import { SelectItem } from './components/SelectItem';

export interface SelectProps {
  items: SelectItemType[];
  itemToString?: (item: SelectItemType | null) => string;
  label?: string | React.ReactChild | React.ReactChild[];
  disabled?: boolean;
  error?: string;
  type?: 'classic' | 'inline';
  classes?: {
    button?: SelectButtonClasses;
    menu?: string;
    menuItem?: string;
  };
  onChange: (changes: UseSelectStateChange<SelectItemType>) => void;
}

export const Select = forwardRef(
  (
    {
      children,
      items,
      itemToString,
      label,
      placeholder,
      classes,
      className,
      disabled,
      error,
      type = 'classic',
      onChange: onSelectedItemChange,
      ...props
    },
    ref,
  ) => {
    const {
      isOpen,
      selectedItem,
      reset,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items,
      itemToString,
      onSelectedItemChange,
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
          disabled={disabled}
          open={isOpen}
          error={error}
          type={type}
          reset={reset}
        >
          {children}
        </SelectButton>
        <ul {...getMenuProps()} className={cn({ [style.menu]: true, [classes?.menu || '']: classes?.menu })}>
          {isOpen &&
            items.map((item, index) => (
              <SelectItem
                key={`${item.value}${index}`}
                item={item}
                itemProps={getItemProps({ item, index })}
                className={classes?.menuItem}
                highlighted={highlightedIndex === index}
                selected={selectedItem === item}
              />
            ))}
        </ul>
      </div>
    );
  },
) as ForwardRefComponent<'div', SelectProps>;

Select.displayName = 'Select';
