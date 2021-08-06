import React, { useCallback } from 'react';
import cn from 'clsx';
import { OptionType } from './Option';
import { SelectedItems } from './SelectedItems';
import { SimpleSelector } from './SimpleSelector';
import styles from './style.module.css';

function createChecker(selected?: string | string[]): (value: OptionType) => boolean {
  if (selected === undefined) return () => false;
  const selectedValues = Array.isArray(selected) ? selected : [selected];
  return (option): boolean => selectedValues.includes(option.value);
}

interface SelectorProps {
  options: OptionType[];
  onChange: (value: string, e: React.ChangeEvent<any>) => void;
  onHover?: (value: string, e: React.MouseEvent<any, MouseEvent>) => void;
  selected?: string | string[];
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  multi?: boolean;
  placeholder?: string;
  collapse?: boolean;
  small?: boolean;
  stopPropagation?: boolean;
}

export const Selector = ({
  options,
  selected,
  onChange,
  onHover,
  className,
  orientation = 'vertical',
  collapse = false,
  placeholder = 'Click to select',
  multi = false,
  small = false,
  stopPropagation = false,
}: SelectorProps) => {
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => event.target && onChange(event.target.value, event),
    [onChange],
  );

  const onHoverHandler = useCallback(
    (value, event: React.MouseEvent<HTMLLabelElement>) => onHover && event.target && onHover(value, event),
    [onHover],
  );

  const checkSelected = createChecker(selected);
  return collapse ? (
    <SelectedItems
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
        orientation="vertical"
        multi={false}
        small={small}
        checkSelected={checkSelected}
        className={cn(styles.nestedSelector, styles.shade)}
        stopPropagation={stopPropagation}
        onHover={onHoverHandler}
      />
    </SelectedItems>
  ) : (
    <SimpleSelector
      options={options}
      onChange={onChangeHandler}
      orientation={orientation}
      className={cn(className, styles.shade)}
      multi={multi}
      small={small}
      checkSelected={checkSelected}
      stopPropagation={stopPropagation}
      onHover={onHoverHandler}
    />
  );
};


export type { OptionType } from './Option';