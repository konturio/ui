import clsx from 'clsx';
import { type PropsWithChildren, useCallback } from 'react';
import s from './style.module.css';

export function ModalBackdrop({
  children,
  onBackdropClick,
  zIndex,
}: PropsWithChildren<{ onBackdropClick?: () => void; zIndex?: string }>) {
  const onlyBackdropHandler: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (onBackdropClick) {
        // Make sure user click exactly on backdrop
        // And not on modal
        if (e.target === e.currentTarget) {
          onBackdropClick();
        }
      }
    },
    [onBackdropClick],
  );
  return (
    <div className={clsx(s.modalBackdrop)} onClick={onlyBackdropHandler} style={zIndex ? { zIndex } : undefined}>
      {children}
    </div>
  );
}
