import {ForwardRefComponent} from "../../../utils/component-helpers/polymorphic";
import {composeEventHandlers} from "../../../utils/helpers/events";
import {makeId} from "../../../utils/helpers/helpers";
import {useStatefulRefValue} from "../../../utils/hooks/useStatefulRefValue";
import {forwardRef, useMemo, useRef} from "react";
import {useComposedRefs} from "../../../utils/hooks/useComposedRefs";
import {useDescendant} from "../../../utils/component-helpers/descendants";

/**
 * Tab
 */
const Tab = forwardRef(
  (
    {
      isSelected: _,
      children,
      as: Comp = 'button',
      index: indexProp,
      disabled,
      onBlur,
      onFocus,
      ...props
    },
    forwardedRef,
  ) => {
    const { id: tabsId, onSelectTab, orientation, selectedIndex, setFocusedIndex } = useTabsCtx('Tab');
    const ownRef = useRef<HTMLElement | null>(null);

    const [element, handleRefSet] = useStatefulRefValue<HTMLElement | null>(ownRef, null);
    const ref = useComposedRefs(forwardedRef, handleRefSet);
    const descendant = useMemo(() => {
      return {
        element,
        disabled: !!disabled,
      };
    }, [disabled, element]);
    const index = useDescendant(descendant, TabsDescendantsContext, indexProp);

    const htmlType = Comp === 'button' && props.type == null ? 'button' : props.type;

    const isSelected = index === selectedIndex;

    function onSelect() {
      onSelectTab(index);
    }

    return (
      <Comp
        // Each element with role `tab` has the property `aria-controls` referring
        // to its associated `tabpanel` element.
        // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
        aria-controls={makeId(tabsId, 'panel', index)}
        aria-disabled={disabled}
        // The active tab element has the state `aria-selected` set to `true` and
        // all other tab elements have it set to `false`.
        // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
        aria-selected={isSelected}
        // Each element that serves as a tab has role `tab` and is contained
        // within the element with role `tablist`.
        // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
        role="tab"
        tabIndex={isSelected ? 0 : -1}
        {...props}
        ref={ref}
        data-reach-tab=""
        data-orientation={orientation}
        data-selected={isSelected ? '' : undefined}
        disabled={disabled}
        id={makeId(tabsId, 'tab', index)}
        onClick={onSelect}
        onFocus={composeEventHandlers(onFocus, () => {
          setFocusedIndex(index);
        })}
        onBlur={composeEventHandlers(onBlur, () => {
          setFocusedIndex(-1);
        })}
        type={htmlType}
      >
        {children}
      </Comp>
    );
  },
) as ForwardRefComponent<'button', TabProps>;

/**
 * @see Docs https://reach.tech/tabs#tab-props
 */
interface TabProps {
  /**
   * `Tab` can receive any type of children.
   *
   * @see Docs https://reach.tech/tabs#tab-children
   */
  children?: React.ReactNode;
  /**
   * Disables a tab when true. Clicking will not work and keyboard navigation
   * will skip over it.
   *
   * @see Docs https://reach.tech/tabs#tab-disabled
   */
  disabled?: boolean;
  index?: number;
}

Tab.displayName = 'Tab';
