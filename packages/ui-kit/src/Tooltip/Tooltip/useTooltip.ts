import { useCallback, useState, useRef } from 'react';

export const useClickTooltip = () => {
  const triggerRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    triggerProps: {
      ref: triggerRef,
      onClick: handleClick,
    },
    tooltipProps: {
      triggerRef,
      open,
      hoverBehavior: false,
      onClose,
    },
  };
};

export const useHoverTooltip = () => {
  const triggerRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpen(false);
  }, []);

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
};

export const useCoordsHoverTooltip = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseEnter = useCallback((event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition(null);
  }, []);

  return {
    triggerProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    tooltipProps: {
      open: position !== null,
      hoverBehavior: true,
      position,
    },
  };
};

export const useCoordsClickTooltip = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const handleClick = useCallback((event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const onClose = useCallback(() => {
    setPosition(null);
  }, []);

  return {
    triggerProps: {
      onClick: handleClick,
    },
    tooltipProps: {
      open: position !== null,
      hoverBehavior: false,
      position,
      onClose,
    },
  };
};
