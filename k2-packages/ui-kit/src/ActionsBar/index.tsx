import cn from 'clsx';
import { Button } from '../Button';
import s from './style.module.css';

export function ActionsBar({ children }: React.PropsWithChildren<unknown>) {
  return <div className={s.actionsBar}>{children}</div>;
}

export function ActionsBarBTN({
  children,
  className,
  ...props
}: React.PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { active?: boolean }
>) {
  return (
    <Button className={cn(s.actionsBTN, className)} {...props} variant="invert-outline">
      {children}
    </Button>
  );
}
