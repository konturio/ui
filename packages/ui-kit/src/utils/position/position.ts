import type { CSSProperties } from 'react';
import type { PRect } from './rect';

export type Position = (targetRect?: PRect | null, popoverRect?: PRect | null) => CSSProperties;

export const getTopPosition = (targetRect: PRect, popoverRect: PRect, isDirectionUp: boolean) => {
  return {
    top: isDirectionUp
      ? `${targetRect.top - popoverRect.height + window.pageYOffset}px`
      : `${targetRect.top + targetRect.height + window.pageYOffset}px`,
  };
};

export const positionDefault: Position = (targetRect, popoverRect) => {
  if (!targetRect || !popoverRect) {
    return {};
  }

  const { directionRight, directionUp } = getCollisions(targetRect, popoverRect);
  return {
    left: directionRight
      ? `${targetRect.right - popoverRect.width + window.pageXOffset}px`
      : `${targetRect.left + window.pageXOffset}px`,
    ...getTopPosition(targetRect, popoverRect, directionUp),
  };
};

export const positionRight: Position = (targetRect, popoverRect) => {
  if (!targetRect || !popoverRect) {
    return {};
  }

  const { directionLeft, directionUp } = getCollisions(targetRect, popoverRect);
  return {
    left: directionLeft
      ? `${targetRect.left + window.pageXOffset}px`
      : `${targetRect.right - popoverRect.width + window.pageXOffset}px`,
    ...getTopPosition(targetRect, popoverRect, directionUp),
  };
};

export const positionMatchWidth: Position = (targetRect, popoverRect) => {
  if (!targetRect || !popoverRect) {
    return {};
  }

  const { directionUp } = getCollisions(targetRect, popoverRect);
  return {
    width: targetRect.width,
    left: targetRect.left,
    ...getTopPosition(targetRect, popoverRect, directionUp),
  };
};

export const getCollisions = (targetRect: PRect, popoverRect: PRect, offsetLeft = 0, offsetBottom = 0) => {
  const collisions = {
    top: targetRect.top - popoverRect.height < 0,
    right: window.innerWidth < targetRect.left + popoverRect.width - offsetLeft,
    bottom: window.innerHeight < targetRect.bottom + popoverRect.height - offsetBottom,
    left: targetRect.left + targetRect.width - popoverRect.width < 0,
  };

  const directionRight = collisions.right && !collisions.left;
  const directionLeft = collisions.left && !collisions.right;
  const directionUp = collisions.bottom && !collisions.top;
  const directionDown = collisions.top && !collisions.bottom;

  return { directionRight, directionLeft, directionUp, directionDown };
};
