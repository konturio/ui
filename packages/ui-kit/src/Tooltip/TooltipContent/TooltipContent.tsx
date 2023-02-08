import clsx from 'clsx';
import { Close16 } from '@konturio/default-icons';
import { forwardRef } from 'react';
import s from './TooltipContent.module.css';
import type { MouseClickEvent } from '../Tooltip/Tooltip';
import type { PropsWithChildren } from 'react';

export const TooltipContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className?: string; onClose?: (e: MouseClickEvent) => void }>
>(function TooltipContent(
  {
    children,
    onClose,
    className,
  }: PropsWithChildren<{
    onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
  }>,
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
