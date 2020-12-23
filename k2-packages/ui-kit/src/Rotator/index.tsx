import React, { useRef, useEffect } from 'react';
import styles from './rotator.module.css';

interface RotatorProps {
  angle: number;
  time?: number;
  timingFunction?: string;
  children: React.ReactChild | React.ReactChild[];
}

export const Rotator = ({ angle, time = 1, timingFunction = 'ease', children }: RotatorProps) => {
  const childContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childContainerRef.current) {
      const setSize = () => {
        if (childContainerRef && childContainerRef.current) {
          const bounds = childContainerRef.current.getBoundingClientRect();

          const offset = (bounds.width - 600) / 2;
          if (offset > 0) {
            childContainerRef.current.style.left = `${offset}px`;
          } else {
            childContainerRef.current.style.left = '0';
          }
        }
      };

      const resizeObserver: any = new ResizeObserver(setSize);

      resizeObserver.observe(childContainerRef.current);
      childContainerRef.current?.addEventListener('transitionend', setSize);

      return () => {
        resizeObserver.unobserve(childContainerRef.current);
        childContainerRef.current?.removeEventListener('transitionend', setSize);
      };
    }
    return;
  }, [childContainerRef, angle]);

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
