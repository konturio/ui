import React from 'react';
import Loadable from 'react-loadable';

const loadedModulesCache = {};
function Spinner(): JSX.Element {
  return <div>Loading Module...</div>;
}

export function LazyModule({ path }: { path: string }): JSX.Element {
  if (!loadedModulesCache[path]) {
    loadedModulesCache[path] = Loadable({
      loader: () => import(`@k2-packages/${path}`),
      loading: <Spinner />,
    });
  }

  const LoadableModule = loadedModulesCache[path];
  return <LoadableModule />;
}
