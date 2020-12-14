import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import styles from './rotator.module.css';

interface RotatorProps {
  angle: number;
  time?: number;
  timingFunction?: string;
  children: React.ReactChild | React.ReactChild[];
}

export const Rotator = ({ angle, time = 1, timingFunction = 'ease', children }: RotatorProps) => {
  console.log('Rotator');
  const childContainerRef = useRef<HTMLDivElement>(null);
  const [wrapperSize, setWrapperSize] = useState({ width: 'unset', height: 'unset' });

  // @ts-ignore
  const resizeObserver: any = useMemo(
    () =>
      new ResizeObserver((entries: any[]) => {
        if (entries.length) {
          const entry = entries[0];
          const { width, height } = entry.contentRect;
          if (width !== 0 && height !== 0) {
            setWrapperSize(entry.target.getBoundingClientRect());
          }
        }
      }),
    [],
  );

  const onTransitionEnd = useCallback(() => {
    setWrapperSize((childContainerRef.current as any).getBoundingClientRect());
  }, []);

  useEffect(() => {
    if (childContainerRef.current) {
      resizeObserver.observe(childContainerRef.current);
      childContainerRef.current.addEventListener('transitionend', onTransitionEnd);

      return () => {
        resizeObserver.unobserve(childContainerRef.current);
        childContainerRef.current?.removeEventListener('transitionend', onTransitionEnd);
      };
    }
    return;
  }, [childContainerRef]);

  return (
    <div id="wrapper" className={styles.wrapper} style={{ width: wrapperSize.width, height: wrapperSize.height }}>
      <div
        id="container"
        ref={childContainerRef}
        style={{ transform: `rotate(${angle}deg)`, transition: `transform ${time}s ${timingFunction}` }}
      >
        {children}
      </div>
    </div>
  );
};
