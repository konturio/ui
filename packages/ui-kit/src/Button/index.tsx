import cn from 'clsx';
import { Children, forwardRef } from 'react';
import s from './style.module.css';
import type { ButtonHTMLAttributes, ReactNode, JSXElementConstructor, ReactElement } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dark?: boolean;
  variant?: 'primary' | 'invert-outline' | 'invert';
  size?: 'large' | 'medium' | 'small' | 'tiny';
  id?: string;
  active?: boolean;
  iconBefore?: string | number | ReactElement<any, string | JSXElementConstructor<any>> | null;
  iconAfter?: string | number | ReactElement<any, string | JSXElementConstructor<any>> | null;
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
      iconBefore,
      iconAfter,
      ...props
    },
    ref,
  ) => {
    const hasContent = Children.count(children) > 0;
    const hasIcon = iconBefore || iconAfter;

    return (
      <button
        ref={ref}
        className={cn(
          s.button,
          {
            [s.buttonDark]: dark,
          },
          s[variant],
          s[size],
          {
            [s.active]: active,
            [s.withContent]: hasContent,
            [s.withIcon]: hasIcon,
          },
          className,
        )}
        {...props}
      >
        <div className={cn(s.buttonInner)}>
          {iconBefore && <div className={s.iconBefore}>{iconBefore}</div>}
          {hasContent && <span className={s.buttonContent}>{children}</span>}
          {iconAfter && <div className={s.iconAfter}>{iconAfter}</div>}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';
