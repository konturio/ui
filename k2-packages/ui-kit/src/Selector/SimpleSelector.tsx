/* eslint-disable prettier/prettier */
import React, { useRef, useLayoutEffect } from 'react';
import cn from 'clsx';
import s from './simpleSelector.css';
import Option, { Option as TOption } from './Option';

type changeEvent = React.ChangeEvent<HTMLInputElement>;

interface BaseSelector {
  options: TOption[];
  onChange: (e: changeEvent | MouseEvent) => void;
  className?: string;
  placeholder?: string;
  multi?: boolean;
  checkSelected: (value: TOption) => boolean;
  small?: boolean;
  stopPropagation?: boolean;
  onHover
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
  orientation = 'vertical',
  small = false,
  stopPropagation = false,
  onHover
}: SimpleSelector): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (stopPropagation) {
      const handler = (e) => {
        e.stopPropagation();
        e.target.value // Prevent double event emit (second for label)
          && onChange(e); 
      };
      ref.current?.addEventListener('click', handler)
      return () => ref.current?.removeEventListener('click', handler)
    }
    return undefined
  }, [ref, stopPropagation]);

  return (
    <div className={cn(s.selector, className, s[orientation])} ref={ref}>
      {options.map((opt) => (
        <Option
          key={opt.value}
          label={opt.label}
          value={opt.value}
          hint={opt.hint}
          onChange={opt.disabled ? () => { /* Do nothing */} : onChange }
          disabled={opt.disabled}
          small={small}
          selected={checkSelected(opt)}
          onMouseOver={onHover}
        />
      ))}
    </div>
  );
}
