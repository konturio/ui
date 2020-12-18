import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import styles from './rotator.module.css';

interface RotatorProps {
  angle: number;
  time?: number;
  timingFunction?: string;
  children: React.ReactChild | React.ReactChild[];
}

export const Rotator = ({ angle, time = 1, timingFunction = 'ease', children }: RotatorProps) => {
  const childContainerRef = useRef<HTMLDivElement>(null);
  // const [wrapperSize, setWrapperSize] = useState<{ width: number; height: number }>({ width: undefined, height: undefined });

  console.log('Rotator ', angle);

  const setSize = () => {
    console.log('set size', angle);
    if (childContainerRef && childContainerRef.current) {
      const bounds = childContainerRef.current.getBoundingClientRect();
      if (angle % 90 !== 0 && bounds.width > 600) {
        console.log('set size 100');
        childContainerRef.current.style.left = `100px`;
      } else {
        console.log('set size 0');
        childContainerRef.current.style.left = '0';
      }
      //childContainerRef.current.style.left = `${ 300 - bounds.width}px`;
    }
  };

  const resizeObserver: any = new ResizeObserver((entries: readonly any[]) => {
    setSize();
    resizeObserver.unobserve(childContainerRef.current);
  });

  useEffect(() => {
    if (childContainerRef.current) {
      resizeObserver.observe(childContainerRef.current);
      childContainerRef.current.addEventListener('transitionend', setSize);

      return () => {
        resizeObserver.unobserve(childContainerRef.current);
        childContainerRef.current?.removeEventListener('transitionend', setSize);
      };
    }
    return;
  }, [childContainerRef]);

  return (
    <div className={styles.wrapper}>
      <div
        ref={childContainerRef}
        className={styles.container}
        style={{ transform: `rotate(${angle}deg)`, transition: `transform ${time}s ${timingFunction}` }}
      >
        {children}
      </div>
    </div>
  );
};
