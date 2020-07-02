import React from 'react';
import PropTypes from 'prop-types';
import cn from 'clsx';
import style from './style.styl';
import ColorsLegend from './ColorsLegend';
import { startCaptureMovement } from './StartCaptureMovement'

function Stick({ className, ...rest }) {
  return <div className={cn(style.stick, className)} {...rest}></div>;
}

const covertToPercent = float => `${float * 100}%`;
const getLastColor = color => color[0] && color[0][1];

const STICK_ID = 'stick';

export default function Slider({ className, steps, value, onChange }) {
  const allColorsExceptLast = steps.slice(0, -1);
  const lastColor = getLastColor(steps.slice(-1));

  return <div
    className={cn(className, style.slider)}
    onMouseDown={(e): void => {
      // @ts-ignore - of course target have id, it's HTMLDivElement!
      const isClickOnStick = e.target.id !== STICK_ID;
      startCaptureMovement(isClickOnStick, e, onChange);
    }} >

    <div className={style.bar} style={{ backgroundColor: lastColor}} id="bar">
      <div style={{flex: value }}>
        <ColorsLegend steps={allColorsExceptLast} />
      </div>
    </div>
    <Stick
      id="stick"
      className={style.stickDock}
      style={{marginLeft: covertToPercent(value)}}
    />

  </div>;
}

Stick.propTypes = {
  className: PropTypes.string
};

Slider.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType(
        [PropTypes.number, PropTypes.string]
      ).isRequired
    ).isRequired
  ).isRequired,
  value: (props, propName, componentName) => {
    const val = props[propName];
    if (typeof val !== 'number' || val < 0 || val > 1) {
      const message = `Invalid prop in <${componentName} />: ${propName} must be number between 0 and 1 (got ${val}))`;
      throw new Error(message);
    }
  },
  onChange: PropTypes.func
};
