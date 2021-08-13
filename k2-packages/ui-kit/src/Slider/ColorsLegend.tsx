import cn from 'clsx';
import s from './style.module.css';

function StepComponent({ color }: { color: string }): JSX.Element {
  return <div className={s.step} style={{ backgroundColor: color }}></div>;
}

type Color = string;
interface ColorsLegend {
  className?: string;
  colors: Color[];
}

export function ColorsLegend({ className, colors }: ColorsLegend): JSX.Element {
  return (
    <div className={cn(className, s.steps)}>
      {colors.map((color) => (
        <StepComponent key={color} color={color} />
      ))}
    </div>
  );
}
