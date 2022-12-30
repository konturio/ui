import { DescendantProvider, useDescendantsInit } from '../utils/component-helpers/descendants';
import type { ReactNode } from 'react';
import { forwardRef, useCallback, useRef, useState } from 'react';
import { isFunction } from '../utils/helpers/typecheck';
import { getOwnerDocument, noop } from '../utils/helpers/helpers';
import type { ForwardRefComponent } from '../utils/component-helpers/polymorphic';
import type { TabDescendant, TabsContextValue, TabsKeyboardActivation, TabsOrientation } from './types';
import { TABS_KEYBOARD_ACTIVATION_AUTO, TABS_ORIENTATION_HORIZONTAL, TABS_ORIENTATION_VERTICAL } from './types';
import { nanoid } from 'nanoid';
import { useControlledState } from '../utils/hooks/useControlledState';
import { TabsDescendantsContext, TabsProvider } from './context';
import cn from 'clsx';
import style from './style.module.css';

/**
 * Tabs
 */
interface TabsProps {
  children: ReactNode | ((props: TabsContextValue) => ReactNode);
  index?: number;
  keyboardActivation?: TabsKeyboardActivation;
  readOnly?: boolean;
  defaultIndex?: number;
  orientation?: TabsOrientation;
  onChange?: (index: number) => void;
}

export const Tabs = forwardRef(
  (
    {
      as: Comp = 'div',
      children,
      defaultIndex,
      orientation = TABS_ORIENTATION_HORIZONTAL,
      index: controlledIndex,
      keyboardActivation = TABS_KEYBOARD_ACTIVATION_AUTO,
      onChange,
      readOnly = false,
      className,
      ...props
    },
    ref,
  ) => {
    const { current: isControlled } = useRef(controlledIndex !== undefined);

    const id = props.id || `tabs_${nanoid(4)}`;
    const selectedPanelRef = useRef<HTMLElement | null>(null);

    const [selectedIndex, setSelectedIndex] = useControlledState({
      controlledValue: controlledIndex,
      defaultValue: defaultIndex ?? 0,
      calledFrom: 'Tabs',
    });

    const [focusedIndex, setFocusedIndex] = useState(-1);

    const [tabs, setTabs] = useDescendantsInit<TabDescendant>();

    const onFocusPanel = useCallback(() => {
      if (selectedPanelRef.current && isFunction(selectedPanelRef.current.focus)) {
        selectedPanelRef.current.focus();
      }
    }, []);

    const onSelectTab = useCallback(
      (index: number) => {
        onChange && onChange(index);
        setSelectedIndex(index);
      },
      [onChange, setSelectedIndex],
    );

    const onSelectTabWithKeyboard = useCallback(
      (index: number) => {
        const tabElement = tabs[index]?.element;
        const doc = getOwnerDocument(tabElement);
        if (keyboardActivation === TABS_KEYBOARD_ACTIVATION_AUTO) {
          onChange && onChange(index);
          setSelectedIndex(index);
        }

        if (tabElement && tabElement !== doc.activeElement && isFunction(tabElement.focus)) {
          tabElement.focus();
        }
      },
      [keyboardActivation, onChange, setSelectedIndex, tabs],
    );

    const dynamicClasses = cn(className, {
      [style.tabs]: true,
      [style.horizonal]: orientation === TABS_ORIENTATION_HORIZONTAL,
      [style.vertical]: orientation === TABS_ORIENTATION_VERTICAL,
    });

    return (
      <DescendantProvider context={TabsDescendantsContext} items={tabs} set={setTabs}>
        <TabsProvider
          focusedIndex={focusedIndex}
          id={id}
          isControlled={isControlled}
          keyboardActivation={keyboardActivation}
          onFocusPanel={onFocusPanel}
          onSelectTab={readOnly ? noop : onSelectTab}
          onSelectTabWithKeyboard={readOnly ? noop : onSelectTabWithKeyboard}
          orientation={orientation}
          selectedIndex={selectedIndex}
          selectedPanelRef={selectedPanelRef}
          setFocusedIndex={setFocusedIndex}
          setSelectedIndex={setSelectedIndex}
        >
          <Comp {...props} ref={ref} id={props.id} className={dynamicClasses}>
            {isFunction(children) ? children({ focusedIndex, id, selectedIndex }) : children}
          </Comp>
        </TabsProvider>
      </DescendantProvider>
    );
  },
) as ForwardRefComponent<'div', TabsProps>;

Tabs.displayName = 'Tabs';
