import s from './style.module.css';
import type { PropsWithChildren } from 'react';

export function ModalContent({ children }: PropsWithChildren) {
  return <section className={s.modalContent}>{children}</section>;
}
