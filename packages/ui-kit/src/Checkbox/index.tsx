import React, { ChangeEvent } from 'react';
import { Finish16 } from '@konturio/default-icons';
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
        <Finish16 />
      </div>
    </LineItem>
  );
}
