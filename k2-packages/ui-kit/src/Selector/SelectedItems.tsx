/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import clsx from 'clsx';
import style from './style.styl';
import { Option } from './Option';

export interface SelectedItems {
  options: Option[];
  placeholder?: string;
  selected?: Option['value'] | Option['value'][];
  className?: string;
  children: JSX.Element;
  checkSelected: (value: Option) => boolean;
}

const getFallbackOption = (placeholder): Option => ({
  label: placeholder,
  value: '',
  disabled: true,
});

export default function SelectedItems({
  options,
  selected,
  placeholder,
  className,
  children,
  checkSelected
}: SelectedItems): JSX.Element {
  const fallbackOption = getFallbackOption(placeholder);
  const selectedOptions = selected ? options.filter(checkSelected) || [fallbackOption] : [fallbackOption];
  const [collapsedState, setCollapsedState] = useState(true);
  return (
    <div className={clsx(style.selector, className)}>
      {collapsedState ? selectedOptions.map((sOpt) => (
        <div key={sOpt.value}>

        </div>
      )) : null}
      { children }
    </div>
  );
}