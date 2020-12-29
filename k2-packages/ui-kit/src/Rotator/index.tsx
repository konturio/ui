import React, { useRef, useEffect } from 'react';
import styles from './rotator.module.css';

interface RotatorProps {
  angle: number;
  time?: number;
  timingFunction?: string;
  children: React.ReactChild | React.ReactChild[];
}

export const Rotator = ({ angle, time = 1, timingFunction = 'ease', children }: RotatorProps) => {
  const childRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childRef.current && containerRef.current) {
      const setSize = () => {
        if (childRef.current && containerRef.current) {
          const angleRad = (Math.PI * angle) / 180;
          const calculatedWidth =
            Math.abs(childRef.current.offsetWidth * Math.cos(angleRad)) +
            Math.abs(childRef.current.offsetHeight * Math.sin(angleRad));
          containerRef.current.style.width = `${calculatedWidth}px`;
        }
      };

      const resizeObserver: any = new ResizeObserver(setSize);

      resizeObserver.observe(childRef.current);
      childRef.current?.addEventListener('transitionend', setSize);

      return () => {
        resizeObserver.unobserve(childRef.current);
        childRef.current?.removeEventListener('transitionend', setSize);
      };
    }
    return;
  }, [childRef, angle]);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div
        ref={childRef}
        className={styles.container}
        style={{ transform: `rotate(${angle}deg)`, transition: `transform ${time}s ${timingFunction}` }}
      >
        {children}
      </div>
    </div>
  );
};
