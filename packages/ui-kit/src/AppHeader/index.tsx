import { ReactNode, useEffect } from 'react';
import { Logo } from '../Logo';
import { Button } from '../Button';
import s from './style.module.css';
import { Chat24 } from '@kontur-ui/default-icons';

const CHAT_BTN_ID = 'kontur_header_chat_btn';

export function AppHeader({
  title,
  children,
  onChatClick,
  installChat,
  logo = <Logo height={24} />,
  afterChatContent,
}: React.PropsWithChildren<{
  title: string | JSX.Element;
  logo?: JSX.Element;
  onChatClick?: React.MouseEventHandler<HTMLButtonElement>;
  installChat?: (id: string) => void;
  afterChatContent?: ReactNode;
}>) {
  useEffect(() => {
    if (installChat) {
      installChat(CHAT_BTN_ID);
    }
  }, [installChat]);

  return (
    <div className={s.appHeader}>
      <div className={s.logo}>{logo}</div>
      <div className={s.title}>{title}</div>
      <div className={s.children}>{children}</div>
      <Button
        id={CHAT_BTN_ID}
        onClick={onChatClick}
        dark
        variant="invert"
        size="small"
        transparent
        iconBefore={<Chat24 />}
      >
        Chat with us
      </Button>
      {afterChatContent && <div className={s.afterChatContent}>{afterChatContent}</div>}
    </div>
  );
}
