/**
 * Creates a MutableRef with ref change callback. Is useful as React.useRef() doesn't notify you when its content
 * changes and mutating the .current property doesn't cause a re-render. An opt-out will be use a callback ref via
 * React.useState(), but it will cause re-renders always.
 */
import { MutableRefObject, useEffect, useRef, useState} from "react";

export function useCallbackRef<T>(
  initialValue: T | null,
  callback: (newValue: T | null, lastValue: T | null) => void,
  skipInitialResolve?: boolean,
): MutableRefObject<T | null> {
  const isFirst = useRef(true);
  const [ref] = useState(() => ({
    // value
    value: initialValue,
    // last callback
    callback,
    // "memoized" public interface
    facade: {
      get current() {
        return ref.value;
      },
      set current(value) {
        const last = ref.value;

        if (last !== value) {
          ref.value = value;

          if (skipInitialResolve && isFirst.current) {
            return;
          }

          ref.callback(value, last);
        }
      },
    },
  }));

  useEffect(() => {
    isFirst.current = false;
  }, []);

  // update callback
  ref.callback = callback;

  return ref.facade;
}
