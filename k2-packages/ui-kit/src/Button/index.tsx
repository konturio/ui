import s from './style.module.css';
import cn from 'clsx';
import { ReactChild } from 'react';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: 'primary' | 'invert-outline';
  id?: string;
  className?: string;
  active?: boolean;
  iconBefore?: ReactChild;
  iconAfter?: ReactChild;
}

export function Button({
  onClick,
  children,
  disabled,
  className,
  active,
  variant = 'primary',
  id,
  iconBefore,
  iconAfter,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(s.button, s[variant], className, { [s.active]: active })}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {iconBefore}
      {children}
      {iconAfter}
    </button>
  );
}
