import React, { forwardRef, useCallback, useState } from 'react';
import { AutocompleteButton, AutocompleteButtonClasses } from './components/AutocompleteButton';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import { AutocompleteItemType } from './types';
import { ForwardRefComponent } from '../utils/component-helpers/polymorphic';
import { AutocompleteItem } from './components/AutocompleteItem';
import cn from 'clsx';
import style from './style.module.css';
import { useComposedRefs } from '../utils/hooks/useComposedRefs';

function defaultItemToString(item: AutocompleteItemType | AutocompleteItemType[] | null): string {
  if (Array.isArray(item)) {
    return item.length ? item.map((itm) => itm.title).join(', ') : '';
  }
  return item ? item.title : '';
}

function defaultFilterFunction(inputValue: string, items: AutocompleteItemType[]) {
  if (!inputValue) return items;
  return items.filter((itm) => itm.title.toLowerCase().includes(inputValue.toLowerCase()));
}

export interface AutocompleteProps {
  items: AutocompleteItemType[];
  filterFunction?: (inputValue: string, items: AutocompleteItemType[]) => AutocompleteItemType[];
  value?: AutocompleteItemType['value'];
  defaultValue?: AutocompleteItemType['value'];
  showSelectedIcon?: boolean;
  showEntryIcon?: boolean;
  withResetButton?: boolean;
  itemToString?: (item: AutocompleteItemType | AutocompleteItemType[] | null) => string;
  label?: string | React.ReactChild | React.ReactChild[];
  disabled?: boolean;
  error?: string;
  type?: 'classic' | 'inline';
  classes?: {
    button?: AutocompleteButtonClasses;
    menu?: string;
    menuItem?: string;
  };
  onChange?: (changes: UseComboboxStateChange<AutocompleteItemType>) => void;
  onSelect?: (selection: AutocompleteItemType | AutocompleteItemType[] | null | undefined) => void;
  children?: string;
}

export const Autocomplete = forwardRef(
  (
    {
      children,
      items,
      filterFunction = defaultFilterFunction,
      value,
      defaultValue,
      showSelectedIcon = true,
      showEntryIcon = false,
      withResetButton = true,
      itemToString = defaultItemToString,
      label,
      placeholder,
      classes,
      className,
      disabled,
      error,
      type = 'classic',
      onChange,
      onSelect,
      ...props
    },
    forwardedRef,
  ) => {
    const initialSelectedItem = value && items ? items.find((itm) => itm.value === value) : undefined;
    const defaultSelectedItem = defaultValue && items ? items.find((itm) => itm.value === defaultValue) : null;

    const [filteredItems, setFilteredItems] = useState<AutocompleteItemType[]>(items);

    const onAutocompleteChange = useCallback(
      (changes: UseComboboxStateChange<AutocompleteItemType>) => {
        if (onChange && typeof onChange === 'function') {
          onChange(changes);
        }
        if (onSelect && typeof onSelect === 'function') {
          onSelect(changes.selectedItem);
        }
      },
      [onChange, onSelect],
    );

    const {
      isOpen,
      reset,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getComboboxProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
    } = useCombobox({
      items,
      itemToString,
      initialSelectedItem: initialSelectedItem || defaultSelectedItem,
      defaultSelectedItem,
      onSelectedItemChange: onAutocompleteChange,
      onInputValueChange({ inputValue }) {
        if (inputValue) {
          setFilteredItems(filterFunction(inputValue, items));
        } else {
          setFilteredItems(items);
        }
      },
    });

    const { ref, ...restComboProps } = getComboboxProps();
    const combinedRef = useComposedRefs(forwardedRef, ref);

    return (
      <div
        className={cn({
          [style.autocomplete]: true,
          [style.open]: isOpen,
          className,
        })}
        {...props}
        {...restComboProps}
        ref={combinedRef}
      >
        <AutocompleteButton
          item={itemToString(selectedItem)}
          labelProps={getLabelProps()}
          toggleProps={getToggleButtonProps()}
          inputProps={getInputProps()}
          label={label}
          disabled={disabled}
          open={isOpen}
          error={error}
          type={type}
          reset={reset}
          withResetButton={withResetButton}
        >
          {children}
        </AutocompleteButton>
        <ul {...getMenuProps()} className={cn({ [style.menu]: true, [classes?.menu || '']: classes?.menu })}>
          {isOpen &&
            filteredItems.map((item, index) => (
              <AutocompleteItem
                key={`${item.value}${index}`}
                item={item}
                title={itemToString(item)}
                itemProps={getItemProps({ item, index })}
                className={classes?.menuItem}
                highlighted={highlightedIndex === index}
                selected={selectedItem === item}
                showSelectedIcon={showSelectedIcon}
                showEntryIcon={showEntryIcon}
              />
            ))}
        </ul>
      </div>
    );
  },
) as ForwardRefComponent<'div', AutocompleteProps>;

Autocomplete.displayName = 'Autocomplete';