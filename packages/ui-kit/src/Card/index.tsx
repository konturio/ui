import cn from 'clsx';
import { forwardRef } from 'react';
import s from './style.module.css';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  inline?: boolean;
}

export const Card = forwardRef<HTMLDivElement, React.PropsWithChildren<CardProps>>(
  ({ className, children, inline = false, ...props }: React.PropsWithChildren<CardProps>, ref) => {
    return (
      <div ref={ref} className={cn(s.card, inline ? s.inline : s.block, className)} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
