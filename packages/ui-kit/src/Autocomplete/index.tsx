import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
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
    const defaultSelectedItem = useMemo(
      () => (defaultValue && items ? items.find((itm) => itm.value === defaultValue) : null),
      [defaultValue, items],
    );

    const [filteredItems, setFilteredItems] = useState<AutocompleteItemType[]>(items);
    const [selectedItem, setSelectedItem] = useState<AutocompleteItemType | null>(defaultSelectedItem || null);

    useEffect(() => {
      setSelectedItem(
        value !== undefined && items
          ? items.find((itm) => itm.value === value) || defaultSelectedItem || null
          : defaultSelectedItem || null,
      );
    }, [value]);

    const onAutocompleteChange = useCallback(
      (changes: UseComboboxStateChange<AutocompleteItemType>) => {
        if (onChange && typeof onChange === 'function') {
          onChange(changes);
        }
        if (onSelect && typeof onSelect === 'function') {
          onSelect(changes.selectedItem);
        }
        setSelectedItem(changes.selectedItem || null);
      },
      [onChange, onSelect, setSelectedItem],
    );

    const reset = useCallback(() => {
      setSelectedItem(defaultSelectedItem || null);
      if (onChange && typeof onChange === 'function') {
        onChange({ selectedItem: defaultSelectedItem || null, type: '__function_reset__' });
      }
      if (onSelect && typeof onSelect === 'function') {
        onSelect(defaultSelectedItem || null);
      }
    }, [setSelectedItem, defaultSelectedItem, onChange, onSelect]);

    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getComboboxProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      items: filteredItems,
      itemToString,
      onSelectedItemChange: onAutocompleteChange,
      onInputValueChange({ inputValue }) {
        if (inputValue) {
          setFilteredItems(filterFunction(inputValue, items));
        } else {
          setFilteredItems(items);
        }
      },
      selectedItem,
    });

    const { ref, ...restComboProps } = getComboboxProps();
    const combinedRef = useComposedRefs(forwardedRef, ref);

    return (
      <div
        className={cn(className, {
          [style.autocomplete]: true,
          [style.open]: isOpen,
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
        <ul
          {...getMenuProps()}
          className={cn(classes?.menu, { [style.menu]: true, [style.noItems]: filteredItems.length === 0 })}
        >
          {isOpen &&
            filteredItems.map((item, index) => (
              <AutocompleteItem
                key={item.value}
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
