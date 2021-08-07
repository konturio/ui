import { useValue } from 'react-cosmos/fixture';
import { TimeSlider } from '.';

export default {
  TimeSlider: <div style={{ minWidth: '60%' }}><TimeSlider
    rulerNumbers={[5, 10, 15, 20, 25, 30]}
    sliderValue={20}
    onSliderChange={(val) => {}}
    colorsLegend={['#5433FF', '#3683ff', '#20BDFF', '#5fdce6', '#A5FECB']}
  /></div>,
  Interactive: () => {
    const [state, setState] = useValue('value', { defaultValue: 15 } as { defaultValue: number });
    const [steps, setSteps] = useValue('steps', { defaultValue: 6 } as { defaultValue: number });
    return (
      <div style={{ minWidth: '60%' }}>
        <div style={{ whiteSpace: 'pre', padding: '1em' }}>
          <div>
            Value: {state}
          </div>
        </div>

        <TimeSlider
          rulerNumbers={Array.from(new Array(steps)).map((_, i) => i * 5)}
          sliderValue={state}
          onSliderChange={(val) => setState(val)}
          colorsLegend={['#5433FF', '#3683ff', '#20BDFF', '#5fdce6', '#A5FECB']}
        />
      </div>
    );
  },
};
