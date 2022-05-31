import { Card } from '../Card';
import cn from 'clsx';
import s from './style.module.css';
import { ReactChild } from 'react';
import { Close24 } from '@konturio/default-icons';

interface Panel {
  className?: string;
  header?: string | React.ReactChild | React.ReactChild[];
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  customCloseBtn?: ReactChild;
  classes?: {
    header?: string;
    closeBtn?: string;
  };
}

export function Panel({
  className,
  children,
  header,
  onClose,
  customCloseBtn,
  classes,
}: React.PropsWithChildren<Panel>) {
  return (
    <Card className={cn(s.card, className)}>
      {header && (
        <div className={cn(s.header, classes?.header)}>
          <div>{header}</div>
          {onClose && !customCloseBtn ? (
            <button className={cn(s.close, classes?.closeBtn)} onClick={onClose}>
              <Close24 />
            </button>
          ) : null}
        </div>
      )}
      {onClose && customCloseBtn ? (
        <button className={classes?.closeBtn} onClick={onClose}>
          {customCloseBtn}
        </button>
      ) : null}

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
