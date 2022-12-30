import s from './style.module.css';
import type { PropsWithChildren } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface ModalProps {
  show?: boolean;
  className?: string;
  classes?: {
    content?: string;
  };
  closeOnBackdropClick?: boolean;
  onModalCloseCallback?: () => void;
}

export function Modal({
  show = true,
  closeOnBackdropClick = true,
  className,
  children,
  classes,
  onModalCloseCallback,
}: PropsWithChildren<ModalProps>) {
  const [showModal, setShowModal] = useState<boolean>(show);
  const backdrpopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  const onBackdropClick = useCallback(
    (ev) => {
      if (closeOnBackdropClick && showModal) {
        setShowModal(false);
        if (onModalCloseCallback) {
          onModalCloseCallback();
        }
      }
    },
    [closeOnBackdropClick, backdrpopRef],
  );

  // need this function to overcatch click events
  const onSectionClick = useCallback((ev) => {
    ev.stopPropagation();
  }, []);

  return (
    <div
      ref={backdrpopRef}
      className={clsx(s.modalContainer, showModal ? s.show : s.hide, className)}
      onMouseDown={onBackdropClick}
    >
      <section onMouseDown={onSectionClick} className={clsx(s.modalContent, classes?.content)}>
        {children}
      </section>
    </div>
  );
}
