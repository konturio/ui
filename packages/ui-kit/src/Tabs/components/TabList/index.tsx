import { forwardRef, memo, useLayoutEffect, useRef } from 'react';
import cn from 'clsx';
import { useDescendantKeyDown, useDescendants } from '../../../utils/component-helpers/descendants';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import { composeEventHandlers } from '../../../utils/helpers/events';
import { TABS_KEYBOARD_ACTIVATION_MANUAL, TABS_ORIENTATION_HORIZONTAL, TABS_ORIENTATION_VERTICAL } from '../../types';
import { TabsDescendantsContext, useTabsCtx } from '../../context';
import { isBoolean } from '../../../utils/helpers/typecheck';
import style from './style.module.css';
import type { ForwardRefComponent, MemoComponent } from '../../../utils/component-helpers/polymorphic';
import type { ReactNode } from 'react';

function boolOrBoolString(value: unknown): value is 'true' | true {
  return value === 'true' ? true : isBoolean(value) ? value : false;
}

/**
 * TabList
 */
interface TabListProps {
  children?: ReactNode;
}

const TabListImpl = forwardRef(({ children, as: Comp = 'div', onKeyDown, className, ...props }, forwardedRef) => {
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

  const dynamicClasses = cn(className, style.tabList, {
    [style.horizontal]: orientation === TABS_ORIENTATION_HORIZONTAL,
    [style.vertical]: orientation === TABS_ORIENTATION_VERTICAL,
  });

  return (
    <Comp role="tablist" {...props} className={dynamicClasses} ref={ref} onKeyDown={handleKeyDown}>
      {children}
    </Comp>
  );
}) as ForwardRefComponent<'div', TabListProps>;

TabListImpl.displayName = 'TabList';

export const TabList = memo(TabListImpl) as MemoComponent<'div', TabListProps>;

TabList.displayName = 'TabList';
