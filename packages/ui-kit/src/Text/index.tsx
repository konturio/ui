import { isValidElement, cloneElement } from 'react';

type TextTypes = 'caption' | 'helper' | 'short-m' | 'long-m' | 'long-l' | 'short-l' | 'label';

export function Text({ children, type, className }: React.PropsWithChildren<{ type: TextTypes; className?: string }>) {
  return isValidElement<{ className: string }>(children) ? (
    cloneElement(children, { className: `k-font-${type} ${children.props.className} ${className}` })
  ) : (
    <span className={`k-font-${type} ${className}`}>{children}</span>
  );
}
