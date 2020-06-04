import React from 'react';
import style from './style.styl';
import Slider from '../Slider';

type Color = string;

export interface TimeSlider {
  rulerNumbers: number[];
  sliderValue: number;
  colorsLegend: Color[];
  outOfRangeColor?: string;
  onSliderChange: (value: number) => void;
}

export default function TimeSlider({
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
      <div className={style.ruler}>
        {rulerNumbers.map((step) => (
          <div key={step} className={style.rule} data-step={step}>
            |
          </div>
        ))}
      </div>
    </div>
  );
}
