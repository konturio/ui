import { Close24 } from '@konturio/default-icons';
import { Panel } from '../Panel';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import s from './ModalDialog.module.css';

export function ModalDialog({
  children,
  title,
  onClose,
  footer,
}: React.PropsWithChildren<{
  title: string;
  onClose: () => void;
  footer?: JSX.Element;
}>) {
  return (
    <Panel
      className={s.modalDialog}
      header={<ModalHeader>{title}</ModalHeader>}
      isOpen={true}
      customControls={[{ icon: <Close24 />, onWrapperClick: onClose }]}
    >
      <ModalBody>{children}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Panel>
  );
}
