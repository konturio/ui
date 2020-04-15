import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import ConnectedComponent from './component';
import getModule from './redux/module';

export { {{moduleName}}StateField, I{{moduleName}}State } from './redux/types';

export interface I{{moduleName}}Props {
  className?: string;
}

export default function {{moduleName}}({ className }: I{{moduleName}}Props) {
  return (
    <DynamicModuleLoader modules={[getModule()]}>
      <ConnectedComponent className={className} />
    </DynamicModuleLoader>
  );
}
