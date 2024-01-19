import { createPortal } from 'react-dom';
import { useContainer } from './useContainer';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalContent } from './ModalContent';
import type { PropsWithChildren } from 'react';

interface ModalProps {
  /**
   * Pass element itself or it id.
   * This element MUST be outside of react root.
   * @default document.body
   **/
  modalContainer?: string | HTMLElement;
  onBackdropClick?: () => void;
  /**
   * any css value for backdrop z-index
   */
  zIndex?: string;
}

export function Modal({
  children,
  modalContainer = document?.body,
  onBackdropClick,
  zIndex,
}: PropsWithChildren<ModalProps>) {
  const container = useContainer(modalContainer);

  if (!container) return null;

  return createPortal(
    <ModalBackdrop onBackdropClick={onBackdropClick} zIndex={zIndex}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    container,
  );
}
