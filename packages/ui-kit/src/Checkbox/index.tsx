import React, { ChangeEvent } from 'react';
import { LineItem } from '../LineItem';
import s from './style.module.css';

interface Checkbox {
  id: string;
  name?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  block?: boolean;
}

export function Checkbox({
  name,
  label,
  className = '',
  block = true,
  id,
  ...native
}: Checkbox &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): React.ReactElement {
  return (
    <LineItem id={id} label={label} className={className} block={block} cursor="pointer">
      <input id={id} name={name} type="checkbox" className={s.checkbox} {...native} />
      <div className={s.icon}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L6.5 12.5L14 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </LineItem>
  );
}
