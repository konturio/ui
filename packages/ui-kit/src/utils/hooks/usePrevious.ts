import { useRef, useEffect } from 'react';

/**
 * Returns the previous value of a reference after a component update.
 */
export function usePrevious<ValueType = unknown>(value: ValueType) {
  const ref = useRef<ValueType | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
