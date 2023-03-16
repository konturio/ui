import * as React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useTooltipContext } from './hooks/useTolltipContext';
import type { TooltopTriggerOptions } from './types';

export const TooltipTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & TooltopTriggerOptions>(
  function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
    const { context } = useTooltipContext('Tooltip');

    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
        }),
      );
    }

    return (
      <div ref={ref} {...context.getReferenceProps(props)}>
        {children}
      </div>
    );
  },
);
