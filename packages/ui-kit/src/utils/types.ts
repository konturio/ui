export type ComponentFactory<P, V> = (
  value: V,
  props?: Partial<P>,
  generateKey?: boolean,
) => React.ReactElement<P> | null | undefined;

export type NodeValue<P> = React.ReactNode | ((props?: Partial<P>) => React.ReactNode);

export type ComponentProps<P> = React.ReactNode | P;

export type ComponentWithFactory<B, P, V> = B & { create: ComponentFactory<P, V> };

