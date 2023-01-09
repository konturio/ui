import { forwardRef, memo, useEffect, useMemo, useRef } from 'react';
import { DescendantProvider, useDescendant, useDescendantsInit } from '../../../utils/component-helpers/descendants';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import { TabPanelDescendantsContext, useTabsCtx } from '../../context';
import { useStatefulRefValue } from '../../../utils/hooks/useStatefulRefValue';
import { makeId } from '../../../utils/helpers/helpers';
import type { TabPanelDescendant } from '../../types';
import type { ReactNode } from 'react';
import type { ForwardRefComponent, MemoComponent } from '../../../utils/component-helpers/polymorphic';

/**
 * TabPanels
 */
interface TabPanelsProps {
  children?: ReactNode;
}

const TabPanelsImpl = forwardRef(({ children, as: Comp = 'div', ...props }, forwardedRef) => {
  const ownRef = useRef();
  const ref = useComposedRefs(ownRef, forwardedRef);
  const [tabPanels, setTabPanels] = useDescendantsInit<TabPanelDescendant>();

  return (
    <DescendantProvider context={TabPanelDescendantsContext} items={tabPanels} set={setTabPanels}>
      <Comp {...props} ref={ref} data-reach-tab-panels="">
        {children}
      </Comp>
    </DescendantProvider>
  );
}) as ForwardRefComponent<'div', TabPanelsProps>;

TabPanelsImpl.displayName = 'TabPanels';

export const TabPanels = memo(TabPanelsImpl) as MemoComponent<'div', TabPanelsProps>;

TabPanels.displayName = 'TabPanels';

/**
 * TabPanel
 */
interface TabPanelProps {
  children?: ReactNode;
  index?: number;
}

export const TabPanel = forwardRef(
  ({ children, 'aria-label': ariaLabel, as: Comp = 'div', index: indexProp, ...props }, forwardedRef) => {
    const { selectedPanelRef, selectedIndex, id: tabsId } = useTabsCtx('TabPanel');
    const ownRef = useRef<HTMLElement | null>(null);

    const [element, handleRefSet] = useStatefulRefValue<HTMLElement | null>(ownRef, null);

    const descendant = useMemo(() => ({ element }), [element]);
    const index = useDescendant(descendant, TabPanelDescendantsContext, indexProp);

    const id = makeId(tabsId, 'panel', index);

    const isSelected = index === selectedIndex;
    const readyToHide = useRef(false);
    const hidden = readyToHide.current ? !isSelected : false;

    useEffect(() => {
      readyToHide.current = true;
    }, []);

    const ref = useComposedRefs(forwardedRef, handleRefSet, isSelected ? selectedPanelRef : null);

    return (
      <Comp
        aria-labelledby={makeId(tabsId, 'tab', index)}
        hidden={hidden}
        role="tabpanel"
        tabIndex={isSelected ? 0 : -1}
        {...props}
        ref={ref}
        id={id}
      >
        {children}
      </Comp>
    );
  },
) as ForwardRefComponent<'div', TabPanelProps>;

TabPanel.displayName = 'TabPanel';
