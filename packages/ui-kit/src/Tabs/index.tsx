import {
  createDescendantContext,
  DescendantProvider,
  useDescendantsInit,
} from '../utils/component-helpers/descendants';
import { createContext } from '../utils/helpers/context';
import { forwardRef, ReactNode, useCallback, useRef, useState } from 'react';
import { isFunction } from '../utils/helpers/typecheck';
import { getOwnerDocument } from '../utils/helpers/helpers';
import { ForwardRefComponent } from '../utils/component-helpers/polymorphic';
import {
  TABS_KEYBOARD_ACTIVATION_AUTO,
  TABS_ORIENTATION_HORIZONTAL,
  TabsKeyboardActivation,
  TabsOrientation,
} from './types';

const TabsDescendantsContext = createDescendantContext<TabDescendant>('TabsDescendantsContext');

const TabPanelDescendantsContext = createDescendantContext<TabPanelDescendant>('TabPanelDescendantsContext');
const [TabsProvider, useTabsCtx] = createContext<InternalTabsContextValue>('Tabs');

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

const Tabs = forwardRef(
  (
    {
      as: Comp = 'div',
      children,
      defaultIndex,
      orientation = TABS_ORIENTATION_HORIZONTAL,
      index: controlledIndex = undefined,
      keyboardActivation = TABS_KEYBOARD_ACTIVATION_AUTO,
      onChange,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const { current: isControlled } = useRef(controlledIndex !== undefined);

    const id = useId(props.id || 'tabs');
    const selectedPanelRef = useRef<HTMLElement | null>(null);

    const isRTL = useRef(false);

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
        const doc = getOwnerDocument(tabElement)!;
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

    return (
      <DescendantProvider context={TabsDescendantsContext} items={tabs} set={setTabs}>
        <TabsProvider
          focusedIndex={focusedIndex}
          id={id}
          isControlled={isControlled}
          isRTL={isRTL}
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
          <Comp {...props} ref={ref} data-reach-tabs="" data-orientation={orientation} id={props.id}>
            {isFunction(children) ? children({ focusedIndex, id, selectedIndex }) : children}
          </Comp>
        </TabsProvider>
      </DescendantProvider>
    );
  },
) as ForwardRefComponent<'div', TabsProps>;

Tabs.displayName = 'Tabs';

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////

/**
 * TabPanels
 *
 * The parent component of the panels.
 *
 * @see Docs https://reach.tech/tabs#tabpanels
 */
const TabPanelsImpl = React.forwardRef(({ children, as: Comp = 'div', ...props }, forwardedRef) => {
  const ownRef = React.useRef();
  const ref = useComposedRefs(ownRef, forwardedRef);
  const [tabPanels, setTabPanels] = useDescendantsInit<TabPanelDescendant>();

  return (
    <DescendantProvider context={TabPanelDescendantsContext} items={tabPanels} set={setTabPanels}>
      <Comp {...props} ref={ref} data-reach-tab-panels="">
        {children}
      </Comp>
    </DescendantProvider>
  );
}) as Polymorphic.ForwardRefComponent<'div', TabPanelsProps>;

TabPanelsImpl.displayName = 'TabPanels';

const TabPanels = React.memo(TabPanelsImpl) as Polymorphic.MemoComponent<'div', TabPanelsProps>;

/**
 * @see Docs https://reach.tech/tabs#tabpanels-props
 */
type TabPanelsProps = TabListProps;

TabPanels.displayName = 'TabPanels';

////////////////////////////////////////////////////////////////////////////////

/**
 * TabPanel
 *
 * The panel that displays when it's corresponding tab is active.
 *
 * @see Docs https://reach.tech/tabs#tabpanel
 */
const TabPanel = React.forwardRef(
  ({ children, 'aria-label': ariaLabel, as: Comp = 'div', index: indexProp, ...props }, forwardedRef) => {
    const { selectedPanelRef, selectedIndex, id: tabsId } = useTabsCtx('TabPanel');
    const ownRef = React.useRef<HTMLElement | null>(null);

    const [element, handleRefSet] = useStatefulRefValue<HTMLElement | null>(ownRef, null);

    const descendant = React.useMemo(() => ({ element }), [element]);
    const index = useDescendant(descendant, TabPanelDescendantsContext, indexProp);

    const id = makeId(tabsId, 'panel', index);

    // Because useDescendant will always return -1 on the first render,
    // `isSelected` will briefly be false for all tabs. We set a tab panel's
    // hidden attribute based `isSelected` being false, meaning that all tabs
    // are initially hidden. This makes it impossible for consumers to do
    // certain things, like focus an element inside the active tab panel when
    // the page loads. So what we can do is track that a panel is "ready" to be
    // hidden once effects are run (descendants work their magic in
    // useLayoutEffect, so we can set our ref in useEffecct to run later). We
    // can use a ref instead of state because we're always geting a re-render
    // anyway thanks to descendants. This is a little more coupled to the
    // implementation details of descendants than I'd like, but we'll add a test
    // to (hopefully) catch any regressions.
    const isSelected = index === selectedIndex;
    const readyToHide = React.useRef(false);
    const hidden = readyToHide.current ? !isSelected : false;
    React.useEffect(() => {
      readyToHide.current = true;
    }, []);

    const ref = useComposedRefs(forwardedRef, handleRefSet, isSelected ? selectedPanelRef : null);

    return (
      <Comp
        // Each element with role `tabpanel` has the property `aria-labelledby`
        // referring to its associated tab element.
        aria-labelledby={makeId(tabsId, 'tab', index)}
        hidden={hidden}
        // Each element that contains the content panel for a tab has role
        // `tabpanel`.
        // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
        role="tabpanel"
        tabIndex={isSelected ? 0 : -1}
        {...props}
        ref={ref}
        data-reach-tab-panel=""
        id={id}
      >
        {children}
      </Comp>
    );
  },
) as Polymorphic.ForwardRefComponent<'div', TabPanelProps>;

/**
 * @see Docs https://reach.tech/tabs#tabpanel-props
 */
interface TabPanelProps {
  /**
   * `TabPanel` can receive any type of children.
   *
   * @see Docs https://reach.tech/tabs#tabpanel-children
   */
  children?: React.ReactNode;
  /**
   * If an explicit index is passed to a `Tab` component, the same index value
   * should be passed to its corresponding `TabPanel`.
   *
   * @see Docs https://reach.tech/tabs#tabpanel-index
   */
  index?: number;
}

TabPanel.displayName = 'TabPanel';

////////////////////////////////////////////////////////////////////////////////

/**
 * A hook that exposes data for a given `Tabs` component to its descendants.
 *
 * @see Docs https://reach.tech/tabs#usetabscontext
 */
function useTabsContext(): TabsContextValue {
  const { focusedIndex, id, selectedIndex } = useTabsCtx('useTabsContext');
  return React.useMemo(
    () => ({
      focusedIndex,
      id,
      selectedIndex,
    }),
    [focusedIndex, id, selectedIndex],
  );
}

////////////////////////////////////////////////////////////////////////////////
// Types

type TabDescendant = Descendant<HTMLElement> & {
  disabled: boolean;
};

type TabPanelDescendant = Descendant<HTMLElement>;

interface TabsContextValue {
  focusedIndex: number;
  id: string;
  selectedIndex: number;
}

interface InternalTabsContextValue {
  focusedIndex: number;
  id: string;
  isControlled: boolean;
  isRTL: React.MutableRefObject<boolean>;
  keyboardActivation: TabsKeyboardActivation | 'auto' | 'manual';
  onFocusPanel: () => void;
  onSelectTab: (index: number) => void;
  onSelectTabWithKeyboard: (index: number) => void;
  orientation: TabsOrientation | 'horizontal' | 'vertical';
  selectedIndex: number;
  selectedPanelRef: React.MutableRefObject<HTMLElement | null>;
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

////////////////////////////////////////////////////////////////////////////////
// Exports

export type { TabListProps, TabPanelProps, TabPanelsProps, TabProps, TabsContextValue, TabsProps };
export { Tab, TabList, TabPanel, TabPanels, Tabs, TabsKeyboardActivation, TabsOrientation, useTabsContext };

function boolOrBoolString(value: any): value is 'true' | true {
  return value === 'true' ? true : isBoolean(value) ? value : false;
}
