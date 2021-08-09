import React, { ChangeEvent } from 'react';
import s from './style.module.css';

interface Radio {
  id: string;
  name?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Radio({
  id,
  name,
  label,
  className = '',
  ...native
}: Radio & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): React.ReactElement {
  return (
    <label htmlFor={id} className={s.root}>
      <input id={id} name={name} type="radio" className={`${s.radio} ${className}`} {...native} />
      <span className={s.label}>{label}</span>
    </label>
  );
}
