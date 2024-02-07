import cn from 'clsx';
import { Close24 } from '@konturio/default-icons';
import { Panel } from '../Panel';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import s from './ModalDialog.module.css';

/**
 *
 * @param [contentClassName] css class for ModalBody+ModalFooter container
 * @returns
 */
export function ModalDialog({
  children,
  title,
  onClose,
  footer,
  className,
  contentClassName,
}: React.PropsWithChildren<{
  title: string;
  onClose: () => void;
  footer?: JSX.Element;
  className?: string;
  contentClassName?: string;
}>) {
  return (
    <Panel
      className={cn(s.modalDialog, className)}
      contentClassName={cn(s.modalDialogContent, contentClassName)}
      header={<ModalHeader>{title}</ModalHeader>}
      isOpen={true}
      customControls={[{ icon: <Close24 />, onWrapperClick: onClose }]}
    >
      <ModalBody>{children}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Panel>
  );
}
