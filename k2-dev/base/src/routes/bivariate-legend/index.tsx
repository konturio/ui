import React, { useState } from 'react';
import { Legend } from '@k2-packages/ui-kit';
import cn from 'clsx';
import s from './style.module.css';
import selectedAxis from './axis.json';

export function BivariateLegend() {
  const [legend] = useState([
    {
      label: 'C1',
      color: 'rgb(90,200,127)',
    },
    {
      label: 'C2',
      color: 'rgb(77,175,74)',
    },
    {
      label: 'C3',
      color: 'rgb(83,152,106)',
    },
    {
      label: 'B1',
      color: 'rgb(173,228,191)',
    },
    {
      label: 'B2',
      color: 'rgb(173,173,108)',
    },
    {
      label: 'B3',
      color: 'rgb(140,98,98)',
    },
    {
      label: 'A1',
      color: 'rgb(232,232,157)',
    },
    {
      label: 'A2',
      color: 'rgb(228,127,129)',
    },
    {
      label: 'A3',
      color: 'rgb(228,26,28)',
    },
  ]);

  return (
    <div className={cn(s.center, s.fullHeight)}>
      <Legend size={3} cells={legend} axis={selectedAxis} />
    </div>
  );
}
