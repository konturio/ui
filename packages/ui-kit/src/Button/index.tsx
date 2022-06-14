import s from './style.module.css';
import cn from 'clsx';
import { ReactChild, forwardRef, Children, ReactNode } from 'react';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  dark?: boolean;
  transparent?: boolean;
  variant?: 'primary' | 'invert-outline' | 'invert' | 'radio';
  size?: 'medium' | 'small';
  id?: string;
  className?: string;
  active?: boolean;
  iconBefore?: ReactChild | null;
  iconAfter?: ReactChild | null;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      disabled,
      className,
      active,
      variant = 'primary',
      size = 'medium',
      dark = false,
      transparent = false,
      id,
      iconBefore,
      iconAfter,
    }: React.PropsWithChildren<ButtonProps>,
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          s.button,
          {
            [s.buttonDark]: dark,
          },
          {
            [s.buttonTransparent]: transparent,
          },
          s[variant],
          s[size],
          className,
          {
            [s.active]: active,
          },
        )}
        onClick={onClick}
        disabled={disabled}
        id={id}
      >
        {iconBefore}
        {Children.count(children) > 0 && <div className={s.buttonContent}>{children}</div>}
        {iconAfter}
      </button>
    );
  },
);

Button.displayName = 'Button';
