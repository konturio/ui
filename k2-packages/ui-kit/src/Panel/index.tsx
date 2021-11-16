import { Card } from '../Card';
import cn from 'clsx';
import s from './style.module.css';
import { ReactChild } from 'react';

interface Panel {
  className?: string;
  header?: string | React.ReactChild | React.ReactChild[];
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  classes?: {
    header?: string;
    closeBtn?: string;
  };
}

const CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7L17 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel" />
    <path d="M17 7L7 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

export function Panel({ className, children, header, onClose, classes }: React.PropsWithChildren<Panel>) {
  return (
    <Card className={cn(s.card, className)}>
      {header && (
        <div className={cn(s.header, classes?.header)}>
          <div>{header}</div>
          {onClose && (
            <button className={cn(s.close, classes?.closeBtn)} onClick={onClose}>
              <CrossIcon />
            </button>
          )}
        </div>
      )}
      {children}
    </Card>
  );
}

interface PanelIconProps {
  icon: ReactChild;
  clickHandler?: () => void;
  className?: string;
}

export function PanelIcon({ icon, clickHandler, className }: PanelIconProps) {
  return (
    <Card onClick={clickHandler} className={cn(s.panelIcon, className)}>
      {icon}
    </Card>
  );
}
