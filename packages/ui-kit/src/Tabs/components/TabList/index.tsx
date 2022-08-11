import { forwardRef, ReactNode, useEffect, useLayoutEffect, useRef } from 'react';
import { useDescendantKeyDown, useDescendants } from '../../../utils/component-helpers/descendants';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import { composeEventHandlers } from '../../../utils/helpers/events';
import { TABS_KEYBOARD_ACTIVATION_MANUAL } from '../../types';

/**
 * TabList
 */
interface TabListProps {
  children?: ReactNode;
}

const TabListImpl = forwardRef(({ children, as: Comp = 'div', onKeyDown, ...props }, forwardedRef) => {
  const {
    focusedIndex,
    isControlled,
    keyboardActivation,
    onSelectTabWithKeyboard,
    orientation,
    selectedIndex,
    setSelectedIndex,
  } = useTabsCtx('TabList');
  const tabs = useDescendants(TabsDescendantsContext);

  const ownRef = useRef<HTMLElement | null>(null);
  const ref = useComposedRefs(forwardedRef, ownRef);

  const handleKeyDown = composeEventHandlers(
    onKeyDown,
    useDescendantKeyDown(TabsDescendantsContext, {
      currentIndex: keyboardActivation === TABS_KEYBOARD_ACTIVATION_MANUAL ? focusedIndex : selectedIndex,
      orientation,
      rotate: true,
      callback: onSelectTabWithKeyboard,
      filter: (tab) => !tab.disabled,
      rtl: isRTL.current,
    }),
  );

  useLayoutEffect(() => {
    if (!isControlled && boolOrBoolString(tabs[selectedIndex]?.disabled)) {
      const next = tabs.find((tab) => !tab.disabled);
      if (next) {
        setSelectedIndex(next.index);
      }
    }
  }, [tabs, isControlled, selectedIndex, setSelectedIndex]);

  return (
    <Comp
      role="tablist"
      aria-orientation={orientation}
      {...props}
      data-reach-tab-list=""
      ref={ref}
      onKeyDown={handleKeyDown}
    >
      {children}
    </Comp>
  );
}) as Polymorphic.ForwardRefComponent<'div', TabListProps>;

TabListImpl.displayName = 'TabList';

export const TabList = memo(TabListImpl) as Polymorphic.MemoComponent<'div', TabListProps>;

TabList.displayName = 'TabList';
