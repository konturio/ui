import React, { PropsWithChildren } from 'react';
import cn from 'clsx';
import s from './style.module.css';

interface LineItem {
  id?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  block?: boolean;
  cursor?: 'pointer';
}

export function LineItem({
  id,
  label,
  className = '',
  block = true,
  children,
  cursor,
}: PropsWithChildren<LineItem>): React.ReactElement {
  return (
    <label htmlFor={id} className={cn(s.root, { [s.block]: block, [s.pointer]: cursor === 'pointer' }, className)}>
      {children}
      <span className={s.label}>{label}</span>
    </label>
  );
}
