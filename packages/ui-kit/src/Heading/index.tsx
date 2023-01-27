import { isValidElement, cloneElement, createElement } from 'react';

type HeadingTypes = 'heading-01' | 'heading-02' | 'heading-03' | 'heading-04' | 'heading-05' | 'heading-06';

const typeToClass = (type: string) => `k-font-${type}`;

const getClassName = (type: string, margins: boolean, className?: string) =>
  `${typeToClass(type)} ${margins ? '' : typeToClass('unset-margins')} ${className ?? ''} `;

export function Heading({
  children,
  type,
  tag,
  margins = true,
}: React.PropsWithChildren<{ type: HeadingTypes; tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; margins?: boolean }>) {
  if (isValidElement<{ className: string }>(children)) {
    return cloneElement(children, {
      className: getClassName(type, margins, children.props.className),
    });
  }
  return createElement(tag ? tag : 'h' + type.slice(-1), { className: getClassName(type, margins) }, children);
}
