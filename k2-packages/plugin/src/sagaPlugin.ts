type Action<T> = { type: string; payload: T };

export interface SagaPlugin<T, X = unknown> {
  start: (action: Action<T>) => Promise<X>;
}
