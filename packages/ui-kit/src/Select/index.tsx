import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { useSelect } from 'downshift';
import cn from 'clsx';
import { SelectButton } from './components/SelectButton';
import { getSelectMode, SELECTION_NODES } from './types';
import { SelectItem } from './components/SelectItem';
import style from './style.module.css';
import type { SelectButtonClasses } from './components/SelectButton';
import type { UseSelectProps, UseSelectState, UseSelectStateChange, UseSelectStateChangeOptions } from 'downshift';
import type { SelectableItem, MultiSelectProp } from './types';
import type { ForwardRefComponent } from '../utils/component-helpers/polymorphic';

function defaultItemToString(item: SelectableItem | SelectableItem[] | null): string {
  if (Array.isArray(item)) {
    return item.length ? item.map((itm) => itm.title).join(', ') : '';
  }
  return item ? item.title : '';
}

function multiselectStateReducer(
  state: UseSelectState<SelectableItem>,
  actionAndChanges: UseSelectStateChangeOptions<SelectableItem>,
): Partial<UseSelectState<SelectableItem>> {
  const { changes, type } = actionAndChanges;
  switch (type) {
    case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
    case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
    case useSelect.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep the menu open after selection.
      };
    default:
      return changes;
  }
}

export interface SelectProps {
  items: SelectableItem[];
  value?: SelectableItem['value'] | SelectableItem['value'][];
  defaultValue?: SelectableItem['value'] | SelectableItem['value'][];
  showSelectedIcon?: boolean;
  showEntryIcon?: boolean;
  multiselect?: MultiSelectProp;
  withResetButton?: boolean;
  itemToString?: (item: SelectableItem | SelectableItem[] | null) => string;
  label?: string | number | React.ReactElement | React.ReactElement[];
  disabled?: boolean;
  error?: string;
  type?: 'classic' | 'inline';
  classes?: {
    button?: SelectButtonClasses;
    menu?: string;
    menuItem?: string;
    noValue?: string;
  };
  onChange?: (changes: UseSelectStateChange<SelectableItem>) => void;
  onSelect?: (selection: SelectableItem | SelectableItem[] | null | undefined) => void;
  onClose?: (selection: SelectableItem | SelectableItem[] | null | undefined) => void;
  onReset?: () => void;
  placeholder?: string;
  alwaysShowPlaceholder?: boolean;
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
      onClose,
      onReset,
      alwaysShowPlaceholder,
      ...props
    },
    ref,
  ) => {
    /* Backward capability */
    const selectionMode = getSelectMode(multiselect);
    const initialSelectedItem = !multiselect && value && items ? items.find((itm) => itm.value === value) : undefined;
    const defaultSelectedItem =
      !multiselect && defaultValue && items ? items.find((itm) => itm.value === defaultValue) : null;

    const [selectedItems, setSelectedItems] = useState<SelectableItem[]>([]);

    useEffect(() => {
      if (value) {
        setSelectedItems(
          (Array.isArray(value) ? value : [value])
            .map((initItm) => items.find((itm) => itm.value === initItm))
            .filter((itm) => itm !== undefined) as SelectableItem[],
        );
      } else {
        if (selectedItems.length) {
          setSelectedItems([]);
        }
      }
    }, [value]);

    const resetMultiselect = useCallback(
      (val?: SelectableItem['value']) => {
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

    const onSelectChange = useCallback(
      (changes: UseSelectStateChange<SelectableItem>) => {
        if (onChange && typeof onChange === 'function') {
          onChange(changes);
        }
        if (multiselect) {
          if (changes.selectedItem === null || changes.selectedItem === undefined) return;
          const index = selectedItems.indexOf(changes.selectedItem);

          let newSelectedItems: SelectableItem[];

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
      },
      [onChange, onSelect, multiselect, selectedItems],
    );

    const onOpenChange = useCallback(
      (changes: UseSelectStateChange<SelectableItem>) => {
        if (!changes.isOpen && onClose && typeof onClose === 'function') {
          onClose(multiselect ? selectedItems : changes.selectedItem);
        }
      },
      [onClose, multiselect, selectedItems],
    );

    const useSelectProps: UseSelectProps<SelectableItem> = {
      items,
      itemToString,
      initialSelectedItem: initialSelectedItem || defaultSelectedItem,
      defaultSelectedItem,
      onSelectedItemChange: onSelectChange,
      onIsOpenChange: onOpenChange,
    };

    if (multiselect) {
      useSelectProps.stateReducer = multiselectStateReducer;
      // need to set selected item to null to allow user resetting selected item on second click
      useSelectProps.selectedItem = null;
    }

    const {
      isOpen,
      selectedItem,
      reset,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect(useSelectProps);

    let selectButtonItems: undefined | string | { title: string; value: SelectableItem['value'] }[];
    if (selectionMode === SELECTION_NODES.MULTI_CHIPS && selectedItems.length) {
      selectButtonItems = selectedItems.map((slItm) => ({
        title: itemToString(slItm),
        value: slItm.value,
      }));
    } else if (multiselect) {
      selectButtonItems = itemToString(selectedItems);
    } else if (selectedItem) {
      selectButtonItems = itemToString(selectedItem);
    }

    const removeFunc = useCallback(
      (item: SelectableItem) => {
        if (multiselect) {
          resetMultiselect(item.value);
        } else {
          reset();
        }
      },
      [multiselect, resetMultiselect, reset],
    );

    const resetFunc = useCallback(() => {
      if (multiselect) {
        resetMultiselect();
      } else {
        reset();
      }
      onReset?.();
    }, [multiselect, resetMultiselect, reset, onReset]);

    const noValue = !selectedItem && !selectedItems.length;

    return (
      <div
        ref={ref}
        className={cn(className, noValue && classes?.noValue, {
          [style.select]: true,
          [style.open]: isOpen,
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
          remove={removeFunc}
          reset={resetFunc}
          selectMode={selectionMode}
          withResetButton={withResetButton}
          value={initialSelectedItem}
          alwaysShowPlaceholder={alwaysShowPlaceholder}
        >
          {children ?? placeholder}
        </SelectButton>
        <ul {...getMenuProps()} className={cn({ [style.menu]: true, [classes?.menu || '']: classes?.menu })}>
          {isOpen &&
            items.map((item, index) => (
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
            ))}
        </ul>
      </div>
    );
  },
) as ForwardRefComponent<'div', SelectProps>;

Select.displayName = 'Select';
