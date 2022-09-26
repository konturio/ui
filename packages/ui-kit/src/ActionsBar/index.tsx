import cn from 'clsx';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';
import s from './style.module.css';

export function ActionsBar({ children }: React.PropsWithChildren<unknown>) {
  return <div className={s.actionsBar}>{children}</div>;
}

export function ActionsBarBTN({ children, className, ...props }: ButtonProps) {
  return (
    <Button className={cn(s.actionsBTN, className)} {...props} dark variant="invert" size="small">
      {children}
    </Button>
  );
}
