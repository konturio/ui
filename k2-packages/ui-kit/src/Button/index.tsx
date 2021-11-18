import s from './style.module.css';
import cn from 'clsx';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: 'primary' | 'invert-outline';
  id?: string;
  className?: string;
  active?: boolean;
}

export function Button({
  onClick,
  children,
  disabled,
  className,
  active,
  variant = 'primary',
  id,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(s.button, s[variant], className, { [s.active]: active })}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
}
