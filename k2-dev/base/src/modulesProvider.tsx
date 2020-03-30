import React from 'react';
import Loadable from 'react-loadable';

const loadedModulesCache = {};

export function LazyModule({ path }: { path: string }) {
  if (!loadedModulesCache[path]) {
    loadedModulesCache[path] = Loadable({
      loader: () => import(`@k2-packages/${path}`),
      loading: () => <div>Loading Module...</div>,
    });
  }

  const LoadableModule = loadedModulesCache[path];
  return <LoadableModule />;
}
