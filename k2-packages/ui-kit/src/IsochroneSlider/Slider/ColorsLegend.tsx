import React from 'react';
import PropTypes from 'prop-types';
import cn from 'clsx';
import style from './style.styl';

function Step({ color, weight }) {
  return <div className={style.step} style={{ flex: weight, backgroundColor: color }} title={weight} ></div>;
}

export default function ColorsLegend({ className, steps }) {
  return (
    <div className={cn(className, style.steps)}>
      { steps.map(([weight, color]) => <Step key={color} color={color} weight={weight} />) }
    </div>
  );
}

Step.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.number,
};

ColorsLegend.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.any)
  )
};
