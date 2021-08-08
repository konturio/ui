import cn from 'clsx';
import s from './style.module.css';

interface Card {
  className?: string;
  inline?: boolean;
}

export function Card({ className, children, inline = false }: React.PropsWithChildren<Card>) {
  return <div className={cn(s.card, inline ? s.inline : s.block, className)}>{children}</div>;
}
