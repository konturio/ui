import { Logo } from '../Logo';
import s from './style.module.css';

const ChatIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path
      d="M20 14.6667C20 15.1382 19.8127 15.5903 19.4793 15.9237C19.1459 16.2571 18.6937 16.4444 18.2222 16.4444H7.55556L4 20V5.77778C4 5.30628 4.1873 4.8541 4.5207 4.5207C4.8541 4.1873 5.30628 4 5.77778 4H18.2222C18.6937 4 19.1459 4.1873 19.4793 4.5207C19.8127 4.8541 20 5.30628 20 5.77778V14.6667Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function AppHeader({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className={s.appHeader}>
      <div className={s.logo}>
        <Logo height={24} />
      </div>
      <div className={s.title}>{title}</div>
      {children}
      <button className={s.chatBtn}>
        <ChatIcon />
        <span className={s.bntText}>Chat with us</span>
      </button>
    </div>
  );
}
