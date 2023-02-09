import clsx from 'clsx';
import { Close16 } from '@konturio/default-icons';
import { forwardRef } from 'react';
import s from './TooltipContent.module.css';
import type { PropsWithChildren } from 'react';

type TooltipContentProps = PropsWithChildren<{
  onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}>;

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(function TooltipContent(
  { children, onClose, className }: TooltipContentProps,
  ref,
) {
  return (
    <div ref={ref} className={clsx(s.tooltipContent, className)}>
      {children}
      {onClose && (
        <div className={s.closeIcon} onClick={onClose}>
          <Close16 />
        </div>
      )}
    </div>
  );
});
