import s from './ModalDialog.module.css';

export function ModalFooter({ children }: React.PropsWithChildren) {
  return <div className={s.modalDialogFooter}>{children}</div>;
}
