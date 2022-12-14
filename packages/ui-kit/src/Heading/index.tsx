import { isValidElement, cloneElement, createElement } from 'react';

type HeadingTypes =
  | 'heading-01'
  | 'heading-02'
  | 'heading-03'
  | 'heading-04'
  | 'heading-05'
  | 'heading-06';

const typeToClass = (type) => `k-font-${type}`;

export function Heading({ children, type }: React.PropsWithChildren<{ type: HeadingTypes }>) {
  if (isValidElement<{ className: string }>(children)) {
    return cloneElement(children, { className: `${typeToClass(type)} ${children.props.className}` });
  }
  return createElement('h' + type.slice(-1), { className: typeToClass(type) }, children);
}
