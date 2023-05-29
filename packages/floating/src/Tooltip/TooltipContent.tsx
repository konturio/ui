import cn from 'clsx';
import * as React from 'react';
import { useMergeRefs, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import s from './TooltipContent.module.css';
import { useTooltipContext } from './hooks/useTolltipContext';

export const TooltipContent = React.forwardRef<HTMLDivElement, React.PropsWithChildren>(function TooltipContent(
  props,
  propRef,
) {
  const { context, arrowRef, size } = useTooltipContext('Tooltip');

  // context.

  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  const { children, ...rest } = props;

  return (
    <FloatingPortal>
      {context.open && (
        <div
          className={cn(s.tooltipContent, s[size ?? 'default'])}
          ref={ref}
          style={{
            position: context.strategy,
            top: context.y ?? 0,
            left: context.x ?? 0,
            visibility: context.x == null ? 'hidden' : 'visible',
          }}
          {...context.getFloatingProps(rest)}
        >
          {children}
          <FloatingArrow
            ref={arrowRef}
            context={context.context}
            className={s.arrow}
            // stroke required to add horisontal/vertical arrow offset from the edge of the tooltip
            // required because we have a border-radius on the tooltip
            stroke="transparent"
            strokeWidth={2}
            height={8}
            width={16}
          />
        </div>
      )}
    </FloatingPortal>
  );
});
