import React from "react";
import s from './style.module.css';

export function Details({ summary, children }: React.PropsWithChildren<{ summary: React.ReactNode }>) {
  return (
    <details className={s.details}>
      <summary className={s.summary}>
        { summary }
      </summary>
      <div className={s.content}>
        { children }
      </div>
    </details>
  );
}
