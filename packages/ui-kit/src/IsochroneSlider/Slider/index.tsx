import cn from 'clsx';
import s from './style.module.css';
import { ColorsLegend } from './ColorsLegend';
import { startCaptureMovement } from './StartCaptureMovement';

function Stick({ className, ...rest }) {
  return <div className={cn(s.stick, className)} {...rest}></div>;
}

const covertToPercent = (float) => `${float * 100}%`;
const getLastColor = (color) => color[0] && color[0][1];

const STICK_ID = 'stick';

export function Slider({ className = '', steps, value, onChange }) {
  const allColorsExceptLast = steps.slice(0, -1);
  const lastColor = getLastColor(steps.slice(-1));

  return (
    <div
      className={cn(className, s.slider)}
      onMouseDown={(e): void => {
        const isClickOnStick = (e.target as HTMLElement).id !== STICK_ID;
        startCaptureMovement(isClickOnStick, e, onChange);
      }}
    >
      <div className={s.bar} style={{ backgroundColor: lastColor }} id="bar">
        <div style={{ flex: value }}>
          <ColorsLegend steps={allColorsExceptLast} />
        </div>
      </div>
      <Stick id="stick" className={s.stickDock} style={{ marginLeft: covertToPercent(value) }} />
    </div>
  );
}
