import { ReactNode } from 'react';

interface DropdownTextProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;
}

export function DropdownText({ children, className }: DropdownTextProps) {
  return (
    <div aria-atomic aria-live="polite" role="alert" className={className}>
      {children}
    </div>
  );
}
