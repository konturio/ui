import { Card } from '../Card';
import s from './style.module.css';
import { Slider } from './Slider';

type Color = string;

export interface IsochroneSlider {
  rulerNumbers: number[];
  sliderValue: number;
  colorsLegend: Color[][];
  outOfRangeColor?: string;
  onSliderChange: (value: number) => void;
}

export function IsochroneSlider({
  rulerNumbers = [],
  sliderValue = 0,
  colorsLegend = [],
  outOfRangeColor,
  onSliderChange = (): void => {
    /* do nothing */
  },
}: IsochroneSlider): JSX.Element {
  return (
    <Card>
      <div className={s.wrapper}>
        <Slider steps={colorsLegend} value={sliderValue} onChange={onSliderChange} />
        <div className={s.ruler}>
          {rulerNumbers.map((step) => (
            <div key={step} className={s.rule} data-step={step}>
              |
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
