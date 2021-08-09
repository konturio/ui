import s from './style.module.css';

export interface MapButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function MapButton({ onClick, children, disabled }: React.PropsWithChildren<MapButton>) {
  return (
    <button className={s.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
