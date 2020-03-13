import React from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

interface ICard {
  title?: string | React.ReactChild | React.ReactChild[],
  children?: string | React.ReactChild | React.ReactChild[],
  className?: string
}

export default function Card({
  title,
  className,
  children,
}: ICard) {
  return (
    <div className={clsx(style.card, className)}>
      { title && <h3 className={style.title}>{ title } </h3> }
      { children }
    </div>
  );
}
