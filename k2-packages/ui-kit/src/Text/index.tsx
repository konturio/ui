import { isValidElement, cloneElement } from 'react';

type TextTypes = 'caption' | 'helper' | 'short-m' | 'long-m' | 'long-l' | 'short-l' | 'heading-m' | 'heading-l';

export function Text({ children, type }: React.PropsWithChildren<{ type: TextTypes }>) {
  return isValidElement(children) ? (
    cloneElement(children, { className: `k-font-${type} ${children.props.className}` })
  ) : (
    <span className={`k-font-${type}`}>{children}</span>
  );
}
