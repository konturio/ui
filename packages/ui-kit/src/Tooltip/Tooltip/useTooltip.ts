import { useCallback, useState, useRef } from 'react';

type Action = 'click' | 'hover';
type Anchor = 'position' | 'element';

export type TooltipType = `${Anchor}.${Action}`;

export const useTooltip = (type: TooltipType) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseEnterPosition = useCallback((event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMouseLeavePosition = useCallback(() => {
    setPosition(null);
  }, []);

  const handleClickPosition = useCallback((event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const onClosePosition = useCallback(() => {
    setPosition(null);
  }, []);

  const triggerRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleClickTrigger = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const onCloseTrigger = useCallback(() => {
    setOpen(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpen(false);
  }, []);

  if (type === 'position.click')
    return {
      triggerProps: {
        onClick: handleClickPosition,
      },
      tooltipProps: {
        open: position !== null,
        hoverBehavior: false,
        position,
        onClose: onClosePosition,
      },
    };

  if (type === 'position.hover')
    return {
      triggerProps: {
        onMouseEnter: handleMouseEnterPosition,
        onMouseLeave: handleMouseLeavePosition,
      },
      tooltipProps: {
        open: position !== null,
        hoverBehavior: true,
        position,
      },
    };

  if (type === 'element.click')
    return {
      triggerProps: {
        ref: triggerRef,
        onClick: handleClickTrigger,
      },
      tooltipProps: {
        triggerRef,
        open,
        hoverBehavior: false,
        onClose: onCloseTrigger,
      },
    };

  if (type === 'element.hover')
    return {
      triggerProps: {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      },
      tooltipProps: {
        triggerRef,
        open,
        hoverBehavior: true,
      },
    };

  console.error(`Unknown tooltip type: ${type}`);

  // this will never happen, required for TS
  throw new Error('Unknown tooltip type');
};
