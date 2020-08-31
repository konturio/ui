import React, { useRef, useEffect, useState, useCallback } from 'react';
import { calculateSize } from './calculateSize';
import s from './rotator.module.css';

interface RotatorProps {
  angle: number;
  children: ({ angle, reCalcSpace }) => React.ReactChild;
}

export function Rotator({ angle, children }: RotatorProps) {
  const childContainerRef = useRef<HTMLDivElement>(null);
  const [wrapperSize, setWrapperSize] = useState({ width: 'unset', height: 'unset' });

  const reCalcSpace = useCallback(() => {
    setWrapperSize(() => calculateSize(childContainerRef.current, angle));
  }, [setWrapperSize, childContainerRef, angle]);

  useEffect(() => {
    reCalcSpace();
  }, []);
  console.log(wrapperSize)
  return (
    <div id="wrapper" className={s.wrapper} style={{ width: wrapperSize.width, height: wrapperSize.height }}>
      <div id="container" ref={childContainerRef} style={{ transform: `rotate(${angle}deg)` }}>
        {children({ angle, reCalcSpace })}
      </div>
    </div>
  );
}
