import cn from 'clsx';
import * as React from 'react';
import { useMergeRefs, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import s from './TooltipContent.module.css';
import { useTooltipContext } from './hooks/useTolltipContext';
import type { TooltipSettings } from './types';

const MAX_TOOLTIP_TEXT_LENGTH = 512;

export const TooltipContent = React.forwardRef<HTMLDivElement, React.PropsWithChildren<TooltipSettings>>(
  function TooltipContent(props, propRef) {
    const { context, arrowRef } = useTooltipContext('Tooltip');

    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    const { size = 'default', children, ...rest } = props;

    if (typeof children !== 'string') {
      console.error(`TooltipContent: children must be a string, got ${typeof children}`);
      return null;
    }

    if (children.length > MAX_TOOLTIP_TEXT_LENGTH) {
      console.error(
        `TooltipContent: children length must be less than ${MAX_TOOLTIP_TEXT_LENGTH}, got ${children.length}`,
      );
      return null;
    }

    return (
      <FloatingPortal>
        {context.open && (
          <div
            className={cn(s.tooltipContent, s[props.size ?? 'default'])}
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
  },
);
