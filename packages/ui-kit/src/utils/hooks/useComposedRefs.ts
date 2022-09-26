import { useCallback } from 'react';
import type { AssignableRef } from '../types';
import { isFunction } from '../helpers/typecheck';

/**
 * Passes or assigns an arbitrary value to a ref function or object.
 */
export function assignRef<RefValueType = any>(ref: AssignableRef<RefValueType> | null | undefined, value: any) {
  if (ref == null) return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
}

/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 */
export function useComposedRefs<RefValueType = any>(...refs: (AssignableRef<RefValueType> | null | undefined)[]) {
  return useCallback((node: any) => {
    for (const ref of refs) {
      assignRef(ref, node);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
