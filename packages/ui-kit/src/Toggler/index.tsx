import cn from 'clsx';
import s from './style.module.css';
import type { ChangeEvent } from 'react';

interface Toggler {
  id: string;
  name?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  on?: boolean;
}

export function Toggler({
  name,
  label,
  className = '',
  id,
  on = false,
  ...native
}: Toggler &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): React.ReactElement {
  return (
    <label className={cn(s.root, { [s.checked]: on, [s.disabled]: native.disabled }, className)}>
      <input id={id} className={s.hidden} type="checkbox" {...native} checked={on} />
      <div className={s.toggle}></div>
      <div className={s.label}>{label}</div>
    </label>
  );
}
