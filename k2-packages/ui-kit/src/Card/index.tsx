import React from 'react';
import cn from 'clsx';
import s from './style.module.css';

interface Card {
  title?: string | React.ReactChild | React.ReactChild[];
  children?: string | React.ReactChild | React.ReactChild[];
  className?: string;
}

export function Card({ title, className, children }: Card) {
  return (
    <div className={cn(s.card, className)}>
      {title && <h3 className={s.title}>{title} </h3>}
      {children}
    </div>
  );
}
