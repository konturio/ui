import { useEffect } from 'react';
import { Logo } from '../Logo';
import { Button } from '../Button';
import s from './style.module.css';

const ChatIcon = () => (
  <svg className={s.chatIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 15.6667C4 16.1382 4.1873 16.5903 4.5207 16.9237C4.8541 17.2571 5.30628 17.4444 5.77778 17.4444H16.4444L20 21V6.77778C20 6.30628 19.8127 5.8541 19.4793 5.5207C19.1459 5.1873 18.6937 5 18.2222 5H5.77778C5.30628 5 4.8541 5.1873 4.5207 5.5207C4.1873 5.8541 4 6.30628 4 6.77778V15.6667Z"
      stroke="#F0F1F2"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CHAT_BTN_ID = 'kontur_header_chat_btn';

export function AppHeader({
  title,
  children,
  onChatClick,
  installChat,
  logo = <Logo height={24} />,
}: React.PropsWithChildren<{
  title: string | JSX.Element;
  logo?: JSX.Element;
  onChatClick?: React.MouseEventHandler<HTMLButtonElement>;
  installChat?: (id: string) => void;
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
      <Button id={CHAT_BTN_ID} onClick={onChatClick} variant="invert-outline">
        <ChatIcon />
        Chat with us
      </Button>
    </div>
  );
}
