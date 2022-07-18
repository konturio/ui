import { ReactElement, Ref, RefObject } from 'react';

export interface RefProps {
  children: ReactElement;
  innerRef: Ref<HTMLElement>;
}

// Checks that the passed object is a valid React ref object.
export const isRefObject = (ref: unknown): ref is RefObject<unknown> =>
  ref !== null && typeof ref === 'object' && ref.hasOwnProperty('current');
