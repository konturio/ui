import React from 'react';
import cn from 'clsx';
import style from './style.styl';

function StepComponent({ color }: { color: string }): JSX.Element {
  return <div className={style.step} style={{ backgroundColor: color }}></div>;
}

type Color = string;
interface ColorsLegend {
  className?: string;
  colors: Color[];
}

export default function ColorsLegend({ className, colors }: ColorsLegend): JSX.Element {
  return (
    <div className={cn(className, style.steps)}>
      {colors.map((color) => (
        <StepComponent key={color} color={color} />
      ))}
    </div>
  );
}
