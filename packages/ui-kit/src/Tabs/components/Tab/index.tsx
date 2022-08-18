import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import { composeEventHandlers } from '../../../utils/helpers/events';
import { makeId } from '../../../utils/helpers/helpers';
import { useStatefulRefValue } from '../../../utils/hooks/useStatefulRefValue';
import { forwardRef, ReactNode, useMemo, useRef } from 'react';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import { useDescendant } from '../../../utils/component-helpers/descendants';
import { TabsDescendantsContext, useTabsCtx } from '../../context';
import { TABS_ORIENTATION_HORIZONTAL, TABS_ORIENTATION_VERTICAL } from '../../types';
import cn from 'clsx';
import style from './style.module.css';

/**
 * Tab
 */
interface TabProps {
  children?: ReactNode;
  disabled?: boolean;
  index?: number;
}

export const Tab = forwardRef(
  (
    { children, as: Comp = 'button', index: indexProp, disabled, onBlur, onFocus, className, ...props },
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

    const dynamicClasses = cn(className, style.tab, {
      [style.horizontal]: orientation === TABS_ORIENTATION_HORIZONTAL,
      [style.vertical]: orientation === TABS_ORIENTATION_VERTICAL,
      [style.selected]: isSelected,
      [style.disabled]: disabled,
    });

    return (
      <Comp
        aria-controls={makeId(tabsId, 'panel', index)}
        aria-disabled={disabled}
        aria-selected={isSelected}
        role="tab"
        tabIndex={isSelected ? 0 : -1}
        {...props}
        className={dynamicClasses}
        ref={ref}
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

Tab.displayName = 'Tab';
