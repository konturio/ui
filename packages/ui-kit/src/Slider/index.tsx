import cn from 'clsx';
import s from './style.module.css';
import { ColorsLegend } from './ColorsLegend';
import { startCaptureMovement } from './startCaptureMovement';
import { sliderPositionToValue } from './sliderPositionToValue';
import { valueToSliderPosition } from './valueToSliderPosition';

interface Stick {
  [x: string]: any;
  className?: string;
}

function Stick({ className, ...rest }: Stick): JSX.Element {
  return <div className={cn(s.stick, className)} {...rest}></div>;
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
export function Slider({ className, colors, outOfRangeColor = 'black', steps, value, onChange }: Slider): JSX.Element {
  const onChangeHandler = steps ? addMiddleware(onChange, sliderPositionToValue(steps)) : onChange;
  const sliderPosition = steps ? valueToSliderPosition(value, steps) : value;
  return (
    <div
      className={cn(className, s.slider)}
      onMouseDown={(e): void => {
        const isClickOnStick = (e.target as HTMLElement).id !== STICK_ID;
        startCaptureMovement(isClickOnStick, e, onChangeHandler);
      }}
    >
      <div id="bar" className={s.bar} style={{ backgroundColor: outOfRangeColor }}>
        <div style={{ flex: sliderPosition / 100 }}>
          <ColorsLegend colors={colors} />
        </div>
      </div>
      <Stick id={STICK_ID} className={s.stickDock} style={{ marginLeft: covertToPercent(sliderPosition) }} />
    </div>
  );
}
