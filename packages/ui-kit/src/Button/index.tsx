import cn from 'clsx';
import { Children, forwardRef } from 'react';
import { Text } from '../Text';
import s from './style.module.css';
import type { ButtonHTMLAttributes, ReactNode, JSXElementConstructor, ReactElement } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dark?: boolean;
  transparent?: boolean;
  variant?: 'primary' | 'invert-outline' | 'invert' | 'radio';
  size?: 'medium' | 'small' | 'small-xs';
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
        {Children.count(children) > 0 &&
          (size === 'small-xs' ? (
            <Text type="caption">
              <span className={s.buttonContent}>{children}</span>
            </Text>
          ) : (
            <span className={s.buttonContent}>{children}</span>
          ))}
        {iconAfter}
      </button>
    );
  },
);

Button.displayName = 'Button';
