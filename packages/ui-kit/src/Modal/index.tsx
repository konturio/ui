import { useCallback, useRef } from 'react';
import clsx from 'clsx';
import s from './style.module.css';
import type { PropsWithChildren } from 'react';

interface ModalProps {
  className?: string;
  classes?: {
    content?: string;
  };
  closeOnBackdropClick?: boolean;
  onModalCloseCallback?: () => void;
}

export function Modal({
  closeOnBackdropClick = true,
  className,
  children,
  classes,
  onModalCloseCallback,
}: PropsWithChildren<ModalProps>) {
  const backdrpopRef = useRef<HTMLDivElement>(null);

  const onBackdropClick = useCallback(
    (ev) => {
      if (closeOnBackdropClick) {
        if (onModalCloseCallback) {
          onModalCloseCallback();
        }
      }
    },
    [closeOnBackdropClick, onModalCloseCallback],
  );

  // need this function to overcatch click events
  const onSectionClick = useCallback((ev) => {
    ev.stopPropagation();
  }, []);

  return (
    <div ref={backdrpopRef} className={clsx(s.modalContainer, className)} onMouseDown={onBackdropClick}>
      <section onMouseDown={onSectionClick} className={clsx(s.modalContent, classes?.content)}>
        {children}
      </section>
    </div>
  );
}
