import React, { ChangeEvent } from 'react';
import style from './style.styl';

export interface ICheckbox {
  id?: string;
  name?: string;
  value?: string;
  readOnly?: boolean;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => {};
}

export default function Checkbox({
  id,
  name,
  value,
  readOnly,
  label,
  className = '',
  disabled,
  checked,
  required,
  onChange
}: ICheckbox): React.ReactElement {
  return (
    <label htmlFor={id} className={style.label}>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        readOnly={readOnly}
        className={`${style.checkbox} ${className}`}
        disabled={disabled}
        checked={checked}
        required={required}
        onChange={onChange}
      />
      {label}
    </label>
  );
}