import cn from 'clsx';
import s from './style.module.css';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  inline?: boolean;
}

export function Card({ className, children, inline = false, ...props }: React.PropsWithChildren<CardProps>) {
  return (
    <div className={cn(s.card, inline ? s.inline : s.block, className)} {...props}>
      {children}
    </div>
  );
}
