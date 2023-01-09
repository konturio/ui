import { useState, useRef, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export function useControlledState<T = unknown>({
  controlledValue,
  defaultValue,
  calledFrom = 'A component',
}: {
  controlledValue: T | undefined;
  defaultValue: T | (() => T);
  calledFrom?: string;
}): [T, Dispatch<SetStateAction<T>>] {
  const wasControlled = controlledValue !== undefined;
  const isControlledRef = useRef(wasControlled);

  if (!isControlledRef.current && wasControlled) {
    console.warn(
      `${calledFrom} is changing from controlled to uncontrolled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
    );
  }

  if (isControlledRef.current && !wasControlled) {
    console.warn(
      `${calledFrom} is changing from uncontrolled to controlled. Components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
    );
  }

  const [valueState, setValue] = useState(isControlledRef.current ? controlledValue! : defaultValue);
  const set: Dispatch<SetStateAction<T>> = useCallback((n) => {
    if (!isControlledRef.current) {
      setValue(n);
    }
  }, []);

  return [isControlledRef.current ? (controlledValue as T) : valueState, set];
}
