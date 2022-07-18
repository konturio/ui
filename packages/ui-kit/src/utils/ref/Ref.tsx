import { Children, cloneElement } from 'react';
import { RefProps } from './utils';

export function Ref({ children, innerRef, ...rest }: RefProps) {
  const child = Children.only(children);
  const objectProps = { ...rest, ref: innerRef };
  return cloneElement(child, objectProps);
}
