import React, { ChangeEvent } from 'react';
import s from './style.module.css';

interface Checkbox {
  id: string;
  name?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({
  name,
  label,
  className = '',
  id,
  ...native
}: Checkbox &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): React.ReactElement {
  return (
    <label htmlFor={id} className={s.root}>
      <input id={id} name={name} type="checkbox" className={`${s.checkbox} ${className}`} {...native} />
      <div className={s.icon}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L6.5 12.5L14 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <span className={s.label}>{label}</span>
    </label>
  );
}
