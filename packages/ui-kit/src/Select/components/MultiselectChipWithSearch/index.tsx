import { useCombobox, useMultipleSelection } from 'downshift';
import { useMemo, useState } from 'react';
import cn from 'clsx';
import { ChevronDown16, ChevronUp16, Close16 } from '@konturio/default-icons';
import { Text } from '../../../Text';
import btnStyle from '../SelectButton/style.module.css';
import style from '../../style.module.css';
import { SelectContent } from '../SelectButton/SelectContent';
import { SELECTION_NODES } from '../../types';
import { SelectItem } from '../SelectItem';
import type { SelectableItem } from '../../types';
import type { UseComboboxStateChangeTypes, UseMultipleSelectionStateChangeTypes } from 'downshift';

function defaultFilterByTitle<I extends SelectableItem>(item: I, search: string) {
  const lowerCasedSearch = search.toLowerCase();
  const value = String(item.title).toLowerCase();
  return value.includes(lowerCasedSearch);
}

function defaultItemToString<I extends SelectableItem>(item: I | null) {
  return item ? String(item.title ?? item.value) : '';
}

function getFilteredList<I extends SelectableItem>({
  list,
  exclude,
  search,
  filter,
}: {
  list: I[];
  exclude: I[];
  search: string;
  filter: (item: I, search: string) => boolean;
}) {
  const excludeValues = exclude.map((e) => String(e.value).toLowerCase());
  return list
    .filter((item) => !excludeValues.includes(String(item.value).toLowerCase()))
    .filter((item) => filter(item, search));
}

type OnChangeEvent<I> = {
  type: UseMultipleSelectionStateChangeTypes | UseComboboxStateChangeTypes;
  selectedItems: I[];
};

export function MultiselectChipWithSearch<I extends SelectableItem>({
  selectedItems,
  items,
  onChange,
  label,
  placeholder,
  noOptionsText,
  disabled = false,
  error = false,
  withResetButton = true,
  type = 'classic',
  filter = defaultFilterByTitle,
  itemToString = defaultItemToString,
  className,
}: {
  selectedItems: I[];
  items: I[];
  onChange: (e: OnChangeEvent<I>) => void;
  label: string;
  placeholder: string;
  noOptionsText: string;
  withResetButton?: boolean;
  disabled?: boolean;
  error?: boolean;
  type?: 'classic' | 'inline';
  filter?: (item: I, search: string) => boolean;
  itemToString?: (item: I | null) => string;
  className?: string;
}) {
  const [inputValue, setInputValue] = useState('');
  const filteredItems = useMemo(
    () =>
      getFilteredList({
        list: items,
        exclude: selectedItems,
        search: inputValue,
        filter,
      }),
    [items, selectedItems, filter, inputValue],
  );

  const { getDropdownProps, removeSelectedItem, reset } = useMultipleSelection({
    selectedItems: selectedItems,
    onStateChange({ selectedItems, type }) {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          onChange({
            type: type,
            selectedItems: selectedItems ?? [],
          });
          break;
        case useMultipleSelection.stateChangeTypes.FunctionReset:
          onChange({
            type: type,
            selectedItems: [],
          });
          break;
        default:
          break;
      }
    },
  });

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, highlightedIndex, getItemProps } =
    useCombobox({
      items: filteredItems,
      itemToString: itemToString,
      defaultHighlightedIndex: 0, // after selection, highlight the first item.
      selectedItem: null,
      inputValue,
      stateReducer(state, actionAndChanges) {
        const { changes, type } = actionAndChanges;

        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
              highlightedIndex: 0, // with the first option highlighted.
            };
          default:
            return changes;
        }
      },
      onStateChange({ inputValue: newInputValue, type, selectedItem: newSelectedItem }) {
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (newSelectedItem) {
              onChange({
                type,
                selectedItems: [...selectedItems, newSelectedItem],
              });
              setInputValue('');
            }
            break;

          case useCombobox.stateChangeTypes.InputChange:
            setInputValue(newInputValue ?? '');

            break;
          default:
            break;
        }
      },
    });

  return (
    <div
      className={cn(className, {
        [style.select]: true,
        [style.open]: isOpen,
      })}
    >
      <div
        className={cn('selectButton', className, {
          [btnStyle.root]: true,
          [btnStyle.disabled]: disabled,
          [btnStyle.error]: error,
          [btnStyle.inline]: type === 'inline',
        })}
      >
        <Text type="label">
          <label className={btnStyle.label} {...getLabelProps()}>
            {label}
          </label>
        </Text>

        <div className={cn('selectBox', btnStyle.selectBox, btnStyle.inheritFocus)}>
          <div className={cn(btnStyle.placeholderWrap)}>
            <SelectContent
              selectMode={SELECTION_NODES.MULTI_CHIPS}
              onRemove={(value) => removeSelectedItem(value)}
              onReset={reset}
              alwaysShowPlaceholder={false}
            >
              {selectedItems}
            </SelectContent>
            <div className={style.searchBox}>
              <input
                placeholder={placeholder}
                {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
                className={style.searchInput}
              />
            </div>
          </div>
          <div className={btnStyle.buttonsContainer}>
            {withResetButton && selectedItems.length ? (
              <button onClick={reset}>
                <Close16 className={btnStyle.resetIcon} />
              </button>
            ) : null}
            <div className={btnStyle.delimiter}></div>
            <button {...getToggleButtonProps()}>{isOpen ? <ChevronUp16 /> : <ChevronDown16 />}</button>
          </div>
        </div>
      </div>
      <ul {...getMenuProps()} className={cn({ [style.menu]: true })}>
        {isOpen &&
          (filteredItems.length ? (
            filteredItems.map((item, index) => (
              <SelectItem
                key={`${item.value}${index}`}
                item={item}
                title={itemToString(item)}
                itemProps={getItemProps({ item, index })}
                highlighted={highlightedIndex === index}
                showSelectedIcon={false}
                showEntryIcon={false}
              />
            ))
          ) : (
            <SelectItem
              key={`no-data`}
              title={noOptionsText}
              item={{ disabled: true, title: noOptionsText, value: null }}
              itemProps={{}}
              highlighted={false}
              showSelectedIcon={false}
              showEntryIcon={false}
            />
          ))}
      </ul>
    </div>
  );
}
