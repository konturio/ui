import { Context, ContextValue } from './types';
import { useEffect } from 'react';

const createProvider = <Value>(Original: React.Provider<ContextValue<Value>>) => {
  const Provider: React.FC<React.ProviderProps<Value>> = (props) => {
    // Holds an actual "props.value"
    const valueRef = React.useRef(props.value);
    // Used to sync context updates and avoid stale values, can be considered as render/effect counter of Provider.
    const versionRef = React.useRef(0);

    // A stable object, is used to avoid context updates via mutation of its values.
    const contextValue = React.useRef<ContextValue<Value>>();

    if (!contextValue.current) {
      contextValue.current = {
        value: valueRef,
        version: versionRef,
        listeners: [],
      };
    }

    useEffect(() => {
      valueRef.current = props.value;
      versionRef.current += 1;

      runWithNormalPriority(() => {
        (contextValue.current as ContextValue<Value>).listeners.forEach((listener) => {
          listener([versionRef.current, props.value]);
        });
      });
    }, [props.value]);

    return React.createElement(Original, { value: contextValue.current }, props.children);
  };

  return Provider;
};

export const createContext = <Value>(defaultValue: Value): Context<Value> => {
  const context = React.createContext<ContextValue<Value>>({
    value: { current: defaultValue },
    version: { current: -1 },
    listeners: [],
  });

  context.Provider = createProvider<Value>(context.Provider) as any;

  // We don't support Consumer API
  delete (context as unknown as Context<Value>).Consumer;

  return context as unknown as Context<Value>;
};
