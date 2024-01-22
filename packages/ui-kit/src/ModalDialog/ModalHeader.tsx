import { Heading } from '../Heading';
import s from './ModalDialog.module.css';

export function ModalHeader({ children }: React.PropsWithChildren) {
  return (
    <div className={s.modalDialogHeader}>
      <Heading type="heading-03" margins={false}>
        {children}
      </Heading>
    </div>
  );
}
