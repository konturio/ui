import { useMemo } from 'react';
import { createDescendantContext } from '../utils/component-helpers/descendants';
import { createContext } from '../utils/helpers/context';
import type { InternalTabsContextValue, TabDescendant, TabPanelDescendant, TabsContextValue } from './types';

const TabsDescendantsContext = createDescendantContext<TabDescendant>('TabsDescendantsContext');
const TabPanelDescendantsContext = createDescendantContext<TabPanelDescendant>('TabPanelDescendantsContext');
const [TabsProvider, useTabsCtx] = createContext<InternalTabsContextValue>('Tabs');

function useTabsContext(): TabsContextValue {
  const { focusedIndex, id, selectedIndex } = useTabsCtx('useTabsContext');
  return useMemo(
    () => ({
      focusedIndex,
      id,
      selectedIndex,
    }),
    [focusedIndex, id, selectedIndex],
  );
}

export { TabsDescendantsContext, TabPanelDescendantsContext, TabsProvider, useTabsCtx, useTabsContext };
