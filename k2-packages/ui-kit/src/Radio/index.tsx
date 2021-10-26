import React, { ChangeEvent } from 'react';
import cn from 'clsx';
import s from './style.module.css';

interface Radio {
  id: string;
  name?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  block?: boolean;
}

export function Radio({
  id,
  name,
  label,
  className = '',
  block = true,
  ...native
}: Radio & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): React.ReactElement {
  return (
    <label htmlFor={id} className={cn(s.root, { [s.block]: block }, className)}>
      <input id={id} name={name} type="radio" className={s.radio} {...native} />
      <span className={s.label}>{label}</span>
    </label>
  );
}
