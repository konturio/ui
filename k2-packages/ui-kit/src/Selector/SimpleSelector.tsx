/* eslint-disable prettier/prettier */
import React from 'react';
import clsx from 'clsx';
import style from './style.styl';
import Option, { Option as TOption } from './Option';

type changeEvent = React.ChangeEvent<HTMLInputElement>;

interface BaseSelector {
  options: TOption[];
  onChange: (e: changeEvent) => void;
  className?: string;
  placeholder?: string;
  multi?: boolean;
  checkSelected: (value: TOption) => boolean;
}

interface VerticalSelector extends BaseSelector {
  orientation?: 'vertical';
  collapse?: boolean;
}

interface HorizontalSelector extends BaseSelector {
  orientation?: 'horizontal';
  collapse?: false;
}

export type SimpleSelector = HorizontalSelector | VerticalSelector;

export default function SimpleSelector({
  options,
  className,
  checkSelected,
  onChange,
  orientation = 'vertical'
}: SimpleSelector): JSX.Element {
  return (
    <div className={clsx(style.selector, className, style[orientation])}>
      {options.map((opt) => (
        <Option
          key={opt.value}
          label={opt.label}
          value={opt.value}
          onChange={onChange}
          selected={checkSelected(opt)}
        />
      ))}
    </div>
  );
}
