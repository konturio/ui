import clsx from 'clsx';
import { Close16 } from '@konturio/default-icons';
import s from './TooltipContent.module.css';
import type { PropsWithChildren } from 'react';

export function TooltipContent({
  children,
  onClose,
  className,
}: PropsWithChildren<{
  onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}>) {
  return (
    <div className={clsx(s.tooltipContent, className)}>
      {children}
      {onClose && (
        <div className={s.closeIcon} onClick={onClose}>
          <Close16 />
        </div>
      )}
    </div>
  );
}
