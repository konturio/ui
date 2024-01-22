import s from './ModalDialog.module.css';

export function ModalBody({ children }: React.PropsWithChildren) {
  return <div className={s.modalDialogBody}>{children}</div>;
}
