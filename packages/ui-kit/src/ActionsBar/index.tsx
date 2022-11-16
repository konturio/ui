import cn from 'clsx';
import { Button } from '../Button';
import s from './style.module.css';
import type { ButtonProps } from '../Button';

export function ActionsBar({ children }: React.PropsWithChildren<unknown>) {
  return <div className={s.actionsBar}>{children}</div>;
}

export function ActionsBarBTN({ children, className, size = 'small', ...props }: ButtonProps) {
  return (
    <Button
      className={cn(s.actionsBTN, { [s.small]: size === 'small-xs' }, className)}
      size={size}
      {...props}
      dark
      variant="invert"
    >
      {children}
    </Button>
  );
}
