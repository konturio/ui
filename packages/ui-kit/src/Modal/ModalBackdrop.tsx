import clsx from 'clsx';
import s from './style.module.css';
import type { PropsWithChildren } from 'react';

export function ModalBackdrop({
  children,
  onBackdropClick,
  zIndex,
}: PropsWithChildren<{ onBackdropClick?: () => void; zIndex?: string }>) {
  return (
    <div className={clsx(s.modalBackdrop)} onMouseDown={onBackdropClick} {...(zIndex && { style: { zIndex } })}>
      {children}
    </div>
  );
}
