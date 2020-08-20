import React, { ChangeEvent } from 'react';
import s from './style.css';

interface Checkbox {
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
  onChange,
}: Checkbox): React.ReactElement {
  return (
    <label htmlFor={id} className={s.label}>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        readOnly={readOnly}
        className={`${s.checkbox} ${className}`}
        disabled={disabled}
        checked={checked}
        required={required}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
