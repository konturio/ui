import { Slider } from '../Slider';
import s from './style.module.css';

type Color = string;

export interface TimeSlider {
  rulerNumbers: number[];
  sliderValue: number;
  colorsLegend: Color[];
  outOfRangeColor?: string;
  onSliderChange: (value: number) => void;
}

export function TimeSlider({
  rulerNumbers = [],
  sliderValue = 0,
  colorsLegend = [],
  outOfRangeColor,
  onSliderChange = (): void => {
    /* do nothing */
  },
}: TimeSlider): JSX.Element {
  return (
    <div>
      <Slider
        colors={colorsLegend}
        value={sliderValue}
        onChange={onSliderChange}
        outOfRangeColor={outOfRangeColor}
        steps={rulerNumbers.map((val) => ({ label: val, value: val }))}
      />
      <div className={s.ruler}>
        {rulerNumbers.map((step) => (
          <div key={step} className={s.rule} data-step={step}>
            |
          </div>
        ))}
      </div>
    </div>
  );
}
