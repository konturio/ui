/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import { Option } from './Option';
import SelectedItems from './SelectedItems';
import SimpleSelector from './SimpleSelector';

type changeEvent = React.ChangeEvent<HTMLInputElement>;

function createChecker(selected: Selector['selected']): (value: Option) => boolean {
  if (selected === undefined) return () => false;
  const selectedValues = Array.isArray(selected) ? selected : [selected];
  return (option): boolean => selectedValues.includes(option.value);
}

export interface Selector {
  options: Option[];
  onChange: (value: Option['value'], e: changeEvent) => void;
  selected?: Option['value'] | Option['value'][];
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  multi?: boolean;
  placeholder?: string;
  collapse?: boolean;
}

export default function Selector({
  options,
  selected,
  onChange,
  className,
  orientation = 'vertical',
  collapse = false,
  placeholder = 'Click for select',
  multi = false,
}: Selector): JSX.Element {
  const onChangeHandler = useCallback((event: changeEvent) => onChange(event.target.value, event), [onChange]);
  const checkSelected = createChecker(selected);
  return collapse
    ? <SelectedItems
        options={options}
        selected={selected}
        placeholder={placeholder}
        className={className}
        checkSelected={checkSelected}
      >
        <SimpleSelector
          options={options}
          onChange={onChangeHandler}
          orientation='vertical'
          multi={false}
          checkSelected={checkSelected}
        />
      </SelectedItems> 
    : <SimpleSelector
        options={options}
        onChange={onChangeHandler}
        orientation={orientation}
        className={className}
        multi={multi}
        checkSelected={checkSelected}
      />
}
