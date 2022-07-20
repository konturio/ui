import s from './style.module.css';
import cn from 'clsx';
import { ButtonHTMLAttributes, Children, forwardRef, ReactChild, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dark?: boolean;
  transparent?: boolean;
  variant?: 'primary' | 'invert-outline' | 'invert' | 'radio';
  size?: 'medium' | 'small';
  id?: string;
  active?: boolean;
  iconBefore?: ReactChild | null;
  iconAfter?: ReactChild | null;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      className,
      active,
      variant = 'primary',
      size = 'medium',
      dark = false,
      transparent = false,
      iconBefore,
      iconAfter,
      ...props
    },
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
        {...props}
      >
        {iconBefore}
        {Children.count(children) > 0 && <div className={s.buttonContent}>{children}</div>}
        {iconAfter}
      </button>
    );
  },
);

Button.displayName = 'Button';
