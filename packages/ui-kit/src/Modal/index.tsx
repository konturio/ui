import { createPortal } from 'react-dom';
import { useCallback } from 'react';
import { useContainer } from './useContainer';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalContent } from './ModalContent';
import { useKeyboard } from './useKeyboard';
import type { PropsWithChildren } from 'react';

interface ModalProps {
  /**
   * Pass element itself or it id.
   * This element MUST be outside of react root.
   * @default document.body
   **/
  modalContainer?: string | HTMLElement;
  onCancel?: (reason: 'esc' | 'click_outside') => void;
  /**
   * any css value for backdrop z-index
   */
  zIndex?: string;
}

export function Modal({ children, modalContainer = document?.body, onCancel, zIndex }: PropsWithChildren<ModalProps>) {
  const container = useContainer(modalContainer);
  useKeyboard('Escape', () => onCancel?.('esc'));
  const onBackdropClick = useCallback(() => onCancel?.('click_outside'), [onCancel]);

  if (!container) return null;

  return createPortal(
    <ModalBackdrop onBackdropClick={onBackdropClick} zIndex={zIndex}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    container,
  );
}
