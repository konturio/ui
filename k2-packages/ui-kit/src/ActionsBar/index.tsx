import React from 'react';
import s from './style.module.css';

export function ActionsBar({ children }: React.PropsWithChildren<unknown>) {
  return <div className={s.actionsBar}>{children}</div>;
}

export function ActionsBarBTN({
  children,
  ...props
}: React.PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) {
  return (
    <button className={s.actionsBarBTN} {...props}>
      {children}
    </button>
  );
}
