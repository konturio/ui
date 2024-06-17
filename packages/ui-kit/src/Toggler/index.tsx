import cn from 'clsx';
import s from './style.module.css';
import type { ChangeEvent } from 'react';

interface Toggler {
  id: string;
  name?: string;
  label?: React.ReactNode;
  offValueLabel?: React.ReactNode;
  classes?: {
    label?: string;
    activeLabel?: string;
  };
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  on?: boolean;
}

export function Toggler({
  name,
  label,
  offValueLabel,
  className = '',
  classes,
  id,
  on = false,
  ...native
}: Toggler &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): React.ReactElement {
  return (
    <label
      className={cn(
        s.root,
        { [s.checked]: on, [s.disabled]: native.disabled, [s.twoDirectional]: offValueLabel },
        className,
      )}
    >
      <input id={id} className={s.hidden} type="checkbox" {...native} checked={on} />
      {offValueLabel && (
        <div className={cn(s.label, classes?.label, { [classes?.activeLabel || '']: !on })}>{offValueLabel}</div>
      )}
      <div className={s.toggle}></div>
      <div className={cn(s.label, classes?.label, { [classes?.activeLabel || '']: on })}>{label}</div>
    </label>
  );
}
