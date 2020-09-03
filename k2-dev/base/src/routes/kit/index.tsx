import React, { useState } from 'react';
import * as UI from '@k2-packages/ui-kit';
import { SearchIcon } from '@k2-packages/default-icons';
import { icons } from '@k2-packages/map-draw-tools';

import style from './style.styl';

const options = [
  { label: 'foo', value: 'foo-value' },
  { label: 'bar', value: 'bar-value' },
  { label: 'disabled', value: 'disabled', disabled: true },
  { label: 'baz', value: 'baz-value' },
];

export default function Kit(): JSX.Element {
  const [selected, setSelected] = useState<string>();
  const [sliderValue, setSliderValue] = useState<number>(25);
  return (
    <form className={style.inputs}>
      <div>Default</div>
      <UI.Input placeholder="Some text" />
      <div>Successes</div>
      <UI.Input successes />
      <div>Error</div>
      <UI.Input error />
      <div>Error with message</div>
      <UI.Input error message="Something bag happen" />
      <div>Disabled</div>
      <UI.Input disabled />
      <div>With icon</div>
      <UI.Input>
        <div>: )</div>
      </UI.Input>
      <UI.Checkbox label="Позвонили" />
      <div className={style.box}>
        <UI.Selector
          selected={selected}
          collapse={true}
          onChange={(value): void => setSelected(value)}
          options={options}
        />
      </div>
      <div className={style.box}>
        <UI.Selector
          selected={selected}
          orientation="horizontal"
          onChange={(value): void => setSelected(value)}
          options={options}
        />
      </div>
      <div className={style.box}>
        <UI.Selector
          selected={selected}
          collapse={true}
          small={true}
          onChange={(value): void => setSelected(value)}
          options={options}
        />
      </div>
      <div className={style.box}>
        <UI.Selector
          selected={selected}
          orientation="horizontal"
          small={true}
          onChange={(value): void => setSelected(value)}
          options={options}
        />
      </div>
      <div className={style.box}>
        <UI.Selector
          selected={selected}
          orientation="horizontal"
          small={true}
          onChange={(value): void => setSelected(value)}
          options={[
            { label: <span style={{ color: 'red' }}>Foo</span>, value: 'foo-value' },
            { label: <SearchIcon />, value: 'bar-value' },
            { label: <icons.Draw90DegreePolygonMode />, value: 'zed-value' },
            { label: 'disabled', value: 'disabled', disabled: true },
          ]}
        />
      </div>
      <div className={style.box}>
        <UI.TimeSlider
          rulerNumbers={[5, 10, 15, 25, 30]}
          sliderValue={sliderValue}
          colorsLegend={['rgba(255, 0, 0)', 'rgba(0, 255, 0)', 'rgba(0, 0, 255)']}
          onSliderChange={(value): void => setSliderValue(value)}
        />
      </div>
    </form>
  );
}
