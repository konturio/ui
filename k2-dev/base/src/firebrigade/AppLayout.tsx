import React from 'react';
import styles from './style.module.scss';

export interface ISlots {
  background?: React.ReactChild | React.ReactChild[];
  topLeft?: React.ReactChild | React.ReactChild[];
  topRight?: React.ReactChild | React.ReactChild[];
  bottomLeft?: React.ReactChild | React.ReactChild[];
  bottomRight?: React.ReactChild | React.ReactChild[];
}

export default function AppLayout({ slots }: { slots: ISlots }) {
  return (
    <section className={styles.fireBrigade}>
      { slots.background }
      <div className={styles.overMap}>
        <div className={styles.topLeftSlot}>
          { slots.topLeft }
        </div>
        <div className={styles.topRightSlot}>
          { slots.topRight }
        </div>
        <div className={styles.bottomLeftSlot}>
          { slots.bottomLeft }
        </div>
        <div className={styles.bottomRightSlot}>
          { slots.bottomRight }
        </div>
      </div>
    </section>
  );
}
