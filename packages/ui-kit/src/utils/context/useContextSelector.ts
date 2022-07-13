import { Context, ContextSelector, ContextValue, ContextVersion } from './types';
import { useContext, useEffect, useReducer } from 'react';

/**
 * This hook returns context selected value by selector.
 * It will only accept context created by `createContext`.
 * It will trigger re-render if only the selected value is referencially changed.
 */
export const useContextSelector = <Value, SelectedValue>(
  context: Context<Value>,
  selector: ContextSelector<Value, SelectedValue>,
): SelectedValue => {
  const contextValue = useContext(context as unknown as Context<ContextValue<Value>>);

  const {
    value: { current: value },
    version: { current: version },
    listeners,
  } = contextValue;
  const selected = selector(value);

  const [state, dispatch] = useReducer(
    (
      prevState: readonly [Value /* contextValue */, SelectedValue /* selector(value) */],
      payload:
        | undefined // undefined from render below
        | readonly [ContextVersion, Value], // from provider effect
    ) => {
      if (!payload) {
        // early bail out when is dispatched during render
        return [value, selected] as const;
      }

      if (payload[0] <= version) {
        if (Object.is(prevState[1], selected)) {
          return prevState; // bail out
        }

        return [value, selected] as const;
      }

      try {
        if (Object.is(prevState[0], payload[1])) {
          return prevState; // do not update
        }

        const nextSelected = selector(payload[1]);

        if (Object.is(prevState[1], nextSelected)) {
          return prevState; // do not update
        }

        return [payload[1], nextSelected] as const;
      } catch (e) {
        // ignored (stale props or some other reason)
      }
      return [...prevState] as const; // schedule update
    },
    [value, selected] as const,
  );

  if (!Object.is(state[1], selected)) {
    // schedule re-render
    // this is safe because it's self contained
    dispatch(undefined);
  }

  useEffect(() => {
    listeners.push(dispatch);

    return () => {
      const index = listeners.indexOf(dispatch);
      listeners.splice(index, 1);
    };
  }, [listeners]);

  return state[1] as SelectedValue;
};
