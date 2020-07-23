/* eslint-disable prettier/prettier */
import React from 'react';
import clsx from 'clsx';
import style from './option.styl';

export interface OptionElement extends Option {
  selected: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMouseOver?: (value: string | number, event: React.MouseEvent<HTMLLabelElement>) => void;
}

export type Option = {
  label: string | JSX.Element;
  value: string;
  disabled?: boolean;
  small?: boolean;
  hint?: string
};

export default function Option({
  selected,
  onChange = (): void => { /* nothing */ },
  value,
  label,
  disabled = false,
  small,
  onMouseOver,
  hint,
}: OptionElement): JSX.Element {
  return (
    <div key={value} className={clsx(
      style.line,
      selected && style.selected,
      disabled && style.disabled,
      small && style.small
    )}>
      <label key={value} className={style.option} onMouseOver={e => onMouseOver && onMouseOver(value, e)} title={hint}>
        {label}
        {/* eslint-disable-next-line prettier/prettier */}
        <input
          name={value}
          value={value}
          type="checkbox"
          checked={selected}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
    </div>
  );
}