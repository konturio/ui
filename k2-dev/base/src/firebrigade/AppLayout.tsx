import React from 'react';
import clsx from 'clsx';
import style from './style.styl';

export interface ISlots {
  background?: React.ReactChild | React.ReactChild[];
  left?: React.ReactChild | React.ReactChild[];
  right?: React.ReactChild | React.ReactChild[];
}

export default function AppLayout({ slots }: { slots: ISlots }) {
  return (
    <section className={style.fireBrigade}>
      <div className={clsx(style.background)}>
        {slots.background}
      </div>
      <div className={style.slots}>
        <div className={clsx(style.slot, style.left)}>
          {slots.left}
        </div>
        <div className={clsx(style.slot, style.right)}>
          {slots.right}
        </div>
      </div>
    </section>
  );
}
