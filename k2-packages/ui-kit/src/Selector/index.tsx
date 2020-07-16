/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Option } from './Option';
import SelectedItems from './SelectedItems';
import SimpleSelector from './SimpleSelector';
import style from './style.styl';


function createChecker(selected: Selector['selected']): (value: Option) => boolean {
  if (selected === undefined) return () => false;
  const selectedValues = Array.isArray(selected) ? selected : [selected];
  return (option): boolean => selectedValues.includes(option.value);
}

export interface Selector {
  options: Option[];
  onChange: (value: Option['value'], e: React.ChangeEvent<HTMLInputElement> | MouseEvent) => void;
  onHover: (value: Option['value'], e: React.MouseEvent<HTMLInputElement>) => void;
  selected?: Option['value'] | Option['value'][];
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  multi?: boolean;
  placeholder?: string;
  collapse?: boolean;
  small?: boolean;
  stopPropagation?: boolean;
}

export default function Selector({
  options,
  selected,
  onChange,
  onHover,
  className,
  orientation = 'vertical',
  collapse = false,
  placeholder = 'Click for select',
  multi = false,
  small = false,
  stopPropagation = false,
}: Selector): JSX.Element {
  const onChangeHandler = useCallback(
    // @ts-ignore
    (event: changeEvent | MouseEvent) => event.target && onChange(event.target.value, event), [onChange]
  );

  const onHoverHandler = useCallback(
    // @ts-ignore
    (value, event: React.MouseEvent<HTMLLabelElement>) => event.target && onHover(value, event), [onChange]
  );

  const checkSelected = createChecker(selected);
  return collapse
    ? <SelectedItems
        options={options}
        selected={selected}
        placeholder={placeholder}
        className={className}
        small={small}
        checkSelected={checkSelected}
      >
        <SimpleSelector
          options={options}
          onChange={onChangeHandler}
          orientation='vertical'
          multi={false}
          small={small}
          checkSelected={checkSelected}
          className={style.nestedSelector}
          stopPropagation={stopPropagation}
          onHover={onHoverHandler}
        />
      </SelectedItems> 
    : <SimpleSelector
        options={options}
        onChange={onChangeHandler}
        orientation={orientation}
        className={clsx(className, style.shade)}
        multi={multi}
        small={small}
        checkSelected={checkSelected}
        stopPropagation={stopPropagation}
        onHover={onHoverHandler}
      />
}
