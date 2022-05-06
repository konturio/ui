import { mountDomRenderer } from 'react-cosmos/dom';
import { decorators, fixtures, rendererConfig } from './cosmos.userdeps';

import { version as defaultThemeVersion } from './../k2-packages/default-theme/package.json';
import { version as uiKitVersion } from './../k2-packages/ui-kit/package.json';
import { version as iconsVersion } from './../k2-packages/icons/package.json';
import { version as mapDrawToolsVersion } from './../k2-packages/map-draw-tools/package.json';
import { version as mapVersion } from './../k2-packages/map/package.json';

mountDomRenderer({ rendererConfig, decorators, fixtures });

if (import.meta.hot) import.meta.hot!.accept();

console.table({
  'default-theme': defaultThemeVersion,
  'ui-kit': uiKitVersion,
  icons: iconsVersion,
  'map-draw-tools': mapDrawToolsVersion,
  map: mapVersion,
});
