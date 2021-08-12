import s from './style.module.css';
import cn from 'clsx';

export interface MapButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'primary' | 'invert-outline';
  id?: string;
}

export function Button({ onClick, children, disabled, type = 'primary', id }: React.PropsWithChildren<MapButton>) {
  return (
    <button className={cn(s.button, s[type])} onClick={onClick} disabled={disabled} id={id}>
      {children}
    </button>
  );
}
