import { mountDomRenderer } from 'react-cosmos/dom';
import { decorators, fixtures, rendererConfig } from './cosmos.userdeps';
import { version as defaultThemeVersion } from './../packages/default-theme/package.json';
import { version as uiKitVersion } from './../packages/ui-kit/package.json';
import { version as defaultIconsVersion } from './../packages/default-icons/package.json';
import { version as floatingVersion } from './../packages/floating/package.json';

mountDomRenderer({ rendererConfig, decorators, fixtures });

if (import.meta.hot) import.meta.hot!.accept();

console.table({
  'default-theme': defaultThemeVersion,
  'ui-kit': uiKitVersion,
  'default-icons': defaultIconsVersion,
  floating: floatingVersion,
});
