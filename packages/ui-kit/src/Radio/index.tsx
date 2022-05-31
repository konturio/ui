import React, { ChangeEvent } from 'react';
import { LineItem } from '../LineItem';
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
    <LineItem id={id} label={label} className={className} block={block} cursor="pointer">
      <input id={id} name={name} type="radio" className={s.radio} {...native} />
    </LineItem>
  );
}
