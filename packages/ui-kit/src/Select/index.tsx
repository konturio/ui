import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { SelectButton, SelectButtonClasses } from './components/SelectButton';
import {
  useSelect,
  UseSelectProps,
  UseSelectState,
  UseSelectStateChange,
  UseSelectStateChangeOptions,
} from 'downshift';
import { MULTISELECT_TYPE_CHIPS, MultiselectType, SelectItemType } from './types';
import { ForwardRefComponent } from '../utils/component-helpers/polymorphic';
import { SelectItem } from './components/SelectItem';
import cn from 'clsx';
import style from './style.module.css';

function defaultItemToString(item: SelectItemType | SelectItemType[] | null): string {
  if (Array.isArray(item)) {
    return item.length ? item.map((itm) => itm.title).join(', ') : '';
  }
  return item ? item.title : '';
}

function multiselectStateReducer(
  state: UseSelectState<SelectItemType>,
  actionAndChanges: UseSelectStateChangeOptions<SelectItemType>,
): Partial<UseSelectState<SelectItemType>> {
  const { changes, type } = actionAndChanges;
  switch (type) {
    case useSelect.stateChangeTypes.MenuKeyDownEnter:
    case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
    case useSelect.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep menu open after selection.
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
}

function searchItem(searchVal: string, item: SelectItemType): boolean {
  return item.title.toLowerCase().startsWith(searchVal.toLowerCase());
}

export interface SelectProps {
  items: SelectItemType[];
  value?: SelectItemType['value'] | SelectItemType['value'][];
  defaultValue?: SelectItemType['value'] | SelectItemType['value'][];
  showSelectedIcon?: boolean;
  showEntryIcon?: boolean;
  multiselect?: MultiselectType;
  withResetButton?: boolean;
  itemToString?: (item: SelectItemType | SelectItemType[] | null) => string;
  label?: string | React.ReactChild | React.ReactChild[];
  disabled?: boolean;
  searchable?: boolean;
  error?: string;
  type?: 'classic' | 'inline';
  classes?: {
    button?: SelectButtonClasses;
    menu?: string;
    menuItem?: string;
  };
  onChange?: (changes: UseSelectStateChange<SelectItemType>) => void;
  onSelect?: (selection: SelectItemType | SelectItemType[] | null | undefined) => void;
}

export const Select = forwardRef(
  (
    {
      children,
      items,
      value,
      defaultValue,
      showSelectedIcon = true,
      showEntryIcon = false,
      multiselect,
      withResetButton = true,
      searchable = false,
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
    ref,
  ) => {
    const initialSelectedItem = !multiselect && value && items ? items.find((itm) => itm.value === value) : undefined;
    const defaultSelectedItem =
      !multiselect && defaultValue && items ? items.find((itm) => itm.value === defaultValue) : null;

    const [selectedItems, setSelectedItems] = useState<SelectItemType[]>(
      value
        ? ((Array.isArray(value) ? value : [value])
            .map((initItm) => items.find((itm) => itm.value === initItm))
            .filter((itm) => itm !== undefined) as SelectItemType[])
        : [],
    );

    const resetMultiselect = useCallback(
      (val?: SelectItemType['value']) => {
        if (val !== undefined) {
          const index = selectedItems.findIndex((itm) => itm.value === val);
          if (index >= 0) {
            const newSelectedItems = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)];
            setSelectedItems(newSelectedItems);
            if (onChange && typeof onChange === 'function') {
              const highlightedIndex = items.findIndex((itm) => itm.value === val);
              const selectedItem = items.find((itm) => itm.value === val);

              onChange({
                highlightedIndex,
                inputValue: '',
                isOpen: true,
                selectedItem,
                type: '__item_click__' as any,
              });
            }
            if (onSelect && typeof onSelect === 'function') {
              onSelect(newSelectedItems);
            }
          }
        } else {
          setSelectedItems([]);
          if (onChange && typeof onChange === 'function') {
            onChange({
              highlightedIndex: -1,
              inputValue: '',
              isOpen: false,
              selectedItem: null,
              type: '__function_reset__' as any,
            });
          }
          if (onSelect && typeof onSelect === 'function') {
            onSelect([]);
          }
        }
      },
      [setSelectedItems, selectedItems],
    );

    const [searchInput, setSearchInput] = useState<string>('');

    const onSelectChange = useCallback(
      (changes: UseSelectStateChange<SelectItemType>) => {
        if (onChange && typeof onChange === 'function') {
          onChange(changes);
        }
        if (multiselect) {
          if (changes.selectedItem === null || changes.selectedItem === undefined) return;
          const index = selectedItems.indexOf(changes.selectedItem);

          let newSelectedItems: SelectItemType[];

          if (index >= 0) {
            newSelectedItems = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)];
          } else {
            newSelectedItems = [...selectedItems, changes.selectedItem];
          }

          setSelectedItems(newSelectedItems);

          if (onSelect && typeof onSelect === 'function') {
            onSelect(newSelectedItems);
          }
        } else {
          if (onSelect && typeof onSelect === 'function') {
            onSelect(changes.selectedItem);
          }
        }
        if (searchable) {
          setSearchInput(changes.selectedItem?.title || '');
        }
      },
      [onChange, onSelect, multiselect, selectedItems, searchable, setSearchInput],
    );

    const useSelectProps: UseSelectProps<SelectItemType> = {
      items,
      itemToString,
      initialSelectedItem: initialSelectedItem || defaultSelectedItem,
      defaultSelectedItem,
      onSelectedItemChange: onSelectChange,
    };

    if (multiselect) {
      useSelectProps.stateReducer = multiselectStateReducer;
      // need to set selected item to null to allow user resetting selected item on second click
      useSelectProps.selectedItem = null;
    }

    const {
      isOpen,
      selectedItem,
      openMenu,
      reset,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect(useSelectProps);

    const hasFilteredItems =
      !searchable || !searchInput ? true : items.findIndex((itm) => searchItem(searchInput, itm)) !== -1;

    const onInputChange = useCallback(
      (val: string) => {
        setSearchInput(val);
        if (!isOpen && hasFilteredItems) {
          openMenu();
        }
      },
      [setSearchInput, isOpen, openMenu, hasFilteredItems],
    );

    const selectButtonItems: undefined | string | { title: string; value: SelectItemType['value'] }[] = useMemo(() => {
      if (multiselect === MULTISELECT_TYPE_CHIPS && selectedItems.length) {
        return selectedItems.map((slItm) => ({
          title: itemToString(slItm),
          value: slItm.value,
        }));
      } else if (multiselect) {
        return itemToString(selectedItems);
      } else if (selectedItem) {
        return itemToString(selectedItem);
      }
      return undefined;
    }, [multiselect, selectedItem, selectedItems]);

    const resetFunc = useCallback(
      (val?: SelectItemType['value']) => {
        if (searchable) {
          setSearchInput('');
        }
        if (multiselect) {
          resetMultiselect(val);
        } else {
          reset();
        }
      },
      [searchable, setSearchInput, multiselect, resetMultiselect, reset],
    );

    return (
      <div
        ref={ref}
        className={cn({
          [style.select]: true,
          [style.open]: isOpen,
          className,
        })}
        {...props}
      >
        <SelectButton
          item={selectButtonItems}
          labelProps={getLabelProps()}
          toggleProps={getToggleButtonProps()}
          label={label}
          disabled={disabled}
          open={isOpen}
          error={error}
          type={type}
          reset={resetFunc}
          multiselect={multiselect}
          searchable={searchable}
          withResetButton={withResetButton}
          onInputChange={searchable ? onInputChange : undefined}
          nonExpandable={!hasFilteredItems}
        >
          {children}
        </SelectButton>

        <ul
          {...getMenuProps()}
          className={cn({
            [style.menu]: true,
            [classes?.menu || '']: classes?.menu,
            [style.hidden]: !hasFilteredItems,
          })}
        >
          {isOpen &&
            items.map((item, index) => {
              return !searchInput || searchItem(searchInput, item) ? (
                <SelectItem
                  key={`${item.value}${index}`}
                  item={item}
                  title={itemToString(item)}
                  itemProps={getItemProps({ item, index })}
                  className={classes?.menuItem}
                  highlighted={highlightedIndex === index}
                  selected={multiselect ? selectedItems.includes(item) : selectedItem === item}
                  showSelectedIcon={showSelectedIcon}
                  showEntryIcon={showEntryIcon}
                />
              ) : null;
            })}
        </ul>
      </div>
    );
  },
) as ForwardRefComponent<'div', SelectProps>;

Select.displayName = 'Select';
