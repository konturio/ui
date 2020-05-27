/* eslint-disable prettier/prettier */
import React from 'react';
import clsx from 'clsx';
import style from './option.styl';

type changeEvent = React.ChangeEvent<HTMLInputElement>;

export interface OptionElement extends Option {
  selected: boolean;
  onChange?: (event: changeEvent) => void;
}

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
  small?: boolean;
};

export default function Option({
  selected,
  onChange = (): void => { /* nothing */ },
  value,
  label,
  disabled = false,
  small
}: OptionElement): JSX.Element {
  return (
    <div key={value} className={clsx(
      style.line,
      selected && style.selected,
      disabled && style.disabled,
      small && style.small
    )}>
      <label key={value} className={style.option}>
        {label}
        {/* eslint-disable-next-line prettier/prettier */}
        <input
          name={label}
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