import PropTypes from 'prop-types';
import cn from 'clsx';
import s from './style.module.css';

function Step({ color, weight }) {
  return <div className={s.step} style={{ flex: weight, backgroundColor: color }} title={weight}></div>;
}

export function ColorsLegend({ className, steps }) {
  return (
    <div className={cn(className, s.steps)}>
      {steps.map(([weight, color]) => (
        <Step key={color} color={color} weight={weight} />
      ))}
    </div>
  );
}

Step.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.number,
};

ColorsLegend.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
};
