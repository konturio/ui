import * as React from 'react';
import { Context, ContextSelector, ContextVersion, ContextValues } from './types';
import { useEffect } from 'react';

/**
 * This hook returns context selected value by selectors.
 * It will only accept context created by `createContext`.
 * It will trigger re-render if only the selected value is referencially changed.
 */
export const useContextSelectors = <
  ContextValue = Record<string, unknown>,
  SingleSelectedValue = unknown,
  Selectors = Record<string, ContextSelector<ContextValue, SingleSelectedValue>>,
  SelectedValues = Record<string, SingleSelectedValue>,
>(
  context: Context<ContextValue>,
  selectors: Selectors,
): SelectedValues => {
  const contextValue = React.useContext(context as unknown as Context<ContextValues<ContextValue>>);

  const {
    value: { current: value },
    version: { current: version },
    listeners,
  } = contextValue;

  const selected = {} as SelectedValues;
  Object.keys(selectors).forEach((key) => {
    selected[key] = selectors[key](value);
  });

  const [state, dispatch] = React.useReducer(
    (
      prevState: readonly [ContextValue, SelectedValues],
      payload: undefined | readonly [ContextVersion, ContextValue],
    ) => {
      if (!payload) {
        // early bail out when is dispatched during render
        return [value, selected] as const;
      }

      if (payload[0] <= version) {
        const stateHasNotChanged = Object.keys(selectors).every((key) =>
          Object.is(prevState[1][key] as SingleSelectedValue, selected[key]),
        );

        if (stateHasNotChanged) {
          return prevState; // bail out
        }

        return [value, selected] as const;
      }

      try {
        const statePayloadHasChanged = Object.keys(prevState[0]).some((key: string) => {
          return !Object.is(prevState[0] /* previous contextValue */[key], payload[1] /* current contextValue */[key]);
        });

        if (!statePayloadHasChanged) {
          return prevState;
        }

        const nextSelected = {} as SelectedValues;
        Object.keys(selectors).forEach((key: string) => {
          nextSelected[key] = selectors[key](payload[1]);
        });

        const selectedHasNotChanged = Object.keys(selectors).every((key: string) => {
          return Object.is(prevState[1][key] /* previous { [key]: selector(value) } */, nextSelected[key]);
        });

        if (selectedHasNotChanged) {
          return prevState;
        }

        return [payload[1], nextSelected] as const;
      } catch (e) {
        // nooop
      }
      return [...prevState] as const; // schedule update
    },
    [value, selected] as const,
  );

  // schedule re-render when selected context is updated
  const hasSelectedValuesUpdates = Object.keys(selectors).find(
    (key: string) => !Object.is(state[1][key], selected[key]),
  );
  if (hasSelectedValuesUpdates !== undefined) {
    dispatch(undefined);
  }

  useEffect(() => {
    listeners.push(dispatch);

    return () => {
      const index = listeners.indexOf(dispatch);
      listeners.splice(index, 1);
    };
  }, [listeners]);

  return state[1];
};
