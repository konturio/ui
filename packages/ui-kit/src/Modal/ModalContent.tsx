import clsx from 'clsx';
import s from './style.module.css';
import type { PropsWithChildren } from 'react';

export function ModalContent({ children }: PropsWithChildren) {
  return <section className={clsx(s.modalContent)}>{children}</section>;
}
