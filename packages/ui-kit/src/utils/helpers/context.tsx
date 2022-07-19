import React from 'react';

type ContextProvider<T> = React.FC<React.PropsWithChildren<T>>;

export function createContext<ContextValueType extends object | null>(
  rootName: string,
  defaultContext?: ContextValueType,
): [ContextProvider<ContextValueType>, (childName: string) => ContextValueType] {
  const Ctx = React.createContext<ContextValueType | undefined>(defaultContext);

  function Provider(props: React.PropsWithChildren<ContextValueType>) {
    const { children, ...context } = props;
    const value = React.useMemo(
      () => context,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(context),
    ) as ContextValueType;
    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
  }

  function useContext(childName: string) {
    const context = React.useContext(Ctx);
    if (context) {
      return context;
    }
    if (defaultContext) {
      return defaultContext;
    }
    throw Error(`${childName} must be rendered inside of a ${rootName} component.`);
  }

  Ctx.displayName = `${rootName}Context`;
  Provider.displayName = `${rootName}Provider`;
  return [Provider, useContext];
}
