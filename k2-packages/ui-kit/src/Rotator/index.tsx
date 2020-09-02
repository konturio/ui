import React, { useRef, useEffect, useState, useCallback } from 'react';
import { calculateSize } from './calculateSize';
import s from './rotator.module.css';

interface RotatorProps {
  angle: number;
  children: ({ angle, reCalcSpace }) => React.ReactChild;
  /* Rotator will be watch for changes in this prop and recalculate bbox after changes */
  watch?: any[];
}

export function Rotator({ angle, children, watch = [] }: RotatorProps) {
  const childContainerRef = useRef<HTMLDivElement>(null);
  const [wrapperSize, setWrapperSize] = useState({ width: 'unset', height: 'unset' });

  const reCalcSpace = useCallback(() => {
    setWrapperSize(() => calculateSize(childContainerRef.current, angle));
  }, [setWrapperSize, childContainerRef, angle]);

  useEffect(() => {
    reCalcSpace();
  }, watch);

  return (
    <div id="wrapper" className={s.wrapper} style={{ width: wrapperSize.width, height: wrapperSize.height }}>
      <div id="container" ref={childContainerRef} style={{ transform: `rotate(${angle}deg)` }}>
        {children({ angle, reCalcSpace })}
      </div>
    </div>
  );
}
