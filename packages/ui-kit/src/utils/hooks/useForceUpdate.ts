import { useState, useCallback } from 'react';

/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */
export function useForceUpdate() {
  const [, dispatch] = useState<unknown>(Object.create(null));
  return useCallback(() => {
    dispatch(Object.create(null));
  }, []);
}
