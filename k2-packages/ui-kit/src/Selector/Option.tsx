/* eslint-disable prettier/prettier */
import React from 'react';
import clsx from 'clsx';
import style from './style.styl';

type changeEvent = React.ChangeEvent<HTMLInputElement>;

export interface OptionElement extends Option {
  selected: boolean;
  onChange?: (event: changeEvent) => void;
}

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

export default function Option({
  selected,
  onChange = (): void => { /* nothing */ },
  value,
  label,
  disabled = false,
}: OptionElement): JSX.Element {
  return (
    <div key={value} className={clsx(
      style.line,
      selected && style.selected,
      disabled && style.disabled
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