import React from 'react';
import cn from 'clsx';
import style from './style.styl';
import ColorsLegend from './ColorsLegend';
import { startCaptureMovement } from './startCaptureMovement';
import { sliderPositionToValue } from './sliderPositionToValue';
import { valueToSliderPosition } from './valueToSliderPosition';

interface Stick {
  [x: string]: any;
  className?: string;
}

function Stick({ className, ...rest }: Stick): JSX.Element {
  return <div className={cn(style.stick, className)} {...rest}></div>;
}

const covertToPercent = (proc: number): string => `${proc}%`;

interface Step {
  label: string | number;
  value: any;
}

interface Slider {
  className?: string;
  colors: string[];
  outOfRangeColor?: string;
  value: number;
  onChange: (value: number) => void;
  steps?: Step[];
}

const addMiddleware = (cb, calculation) => (data) => cb(calculation(data));

const STICK_ID = 'stick';
export default function Slider({
  className,
  colors,
  outOfRangeColor = 'black',
  steps,
  value,
  onChange,
}: Slider): JSX.Element {
  const onChangeHandler = steps ? addMiddleware(onChange, sliderPositionToValue(steps)) : onChange;
  const sliderPosition = steps ? valueToSliderPosition(value, steps) : value;
  return (
    <div
      className={cn(className, style.slider)}
      onMouseDown={(e): void => {
        // @ts-ignore - of course target have id, it's HTMLDivElement!
        const isClickOnStick = e.target.id !== STICK_ID;
        startCaptureMovement(isClickOnStick, e, onChangeHandler);
      }}
    >
      <div id="bar" className={style.bar} style={{ backgroundColor: outOfRangeColor }}>
        <div style={{ flex: sliderPosition / 100 }}>
          <ColorsLegend colors={colors} />
        </div>
      </div>
      <Stick id={STICK_ID} className={style.stickDock} style={{ marginLeft: covertToPercent(sliderPosition) }} />
    </div>
  );
}
