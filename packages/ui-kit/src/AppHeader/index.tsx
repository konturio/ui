import { Logo } from '../Logo';
import s from './style.module.css';
import type { ReactNode } from 'react';

export function AppHeader({
  title,
  children,
  logo = <Logo height={24} />,
  afterChatContent,
}: React.PropsWithChildren<{
  title: string | JSX.Element;
  logo?: JSX.Element;
  afterChatContent?: ReactNode;
}>) {
  return (
    <div className={s.appHeader}>
      <div className={s.logo}>{logo}</div>
      <div className={s.title}>{title}</div>
      <div className={s.children}>{children}</div>
      {afterChatContent && <div className={s.afterChatContent}>{afterChatContent}</div>}
    </div>
  );
}
