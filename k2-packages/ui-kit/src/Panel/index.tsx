import { Card } from '../Card';
import cn from 'clsx';
import s from './style.module.css';

interface Panel {
  className?: string;
  header?: string | React.ReactChild | React.ReactChild[];
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 7L17 17"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M17 7L7 17"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export function Panel({ className, children, header, onClose }: React.PropsWithChildren<Panel>) {
  return (
    <Card className={cn(s.card, className)}>
      {header && (
        <div className={s.header}>
          <div>{header}</div>
          {onClose && <button className={s.close} onClick={onClose}>
            <CrossIcon />
          </button> }
        </div>
      )}
      {children}
    </Card>
  );
}
