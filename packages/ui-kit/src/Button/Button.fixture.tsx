import { EyeBallIcon } from '@konturio/default-icons';
import { useSelect, useValue } from 'react-cosmos/fixture';
import s from './fixture-style.module.css';
import { Button } from '.';

export default {
  ['regular']: () => {
    const [size] = useSelect('size', {
      options: ['tiny', 'small', 'medium', 'large'],
      defaultValue: 'medium',
    });

    const [disabled] = useValue('disabled', {
      defaultValue: false,
    });

    return (
      <div>
        <h3>Primary</h3>
        <div style={{ width: '300px', margin: '1em', gap: '1em', display: 'flex', flexFlow: 'row nowrap' }}>
          <Button onClick={console.log} size={size} disabled={disabled}>
            Konturio button
          </Button>
          <Button onClick={console.log} size={size} disabled={disabled} iconAfter={<EyeBallIcon />}>
            Calculate MCDA
          </Button>
          <Button onClick={console.log} size={size} disabled={disabled} iconBefore={<EyeBallIcon />}>
            Create Layer
          </Button>
          <Button onClick={console.log} size={size} disabled={disabled} iconBefore={<EyeBallIcon />} />
        </div>
        <h3>Invert-Outline</h3>
        <div style={{ width: '300px', margin: '1em', gap: '1em', display: 'flex', flexFlow: 'row nowrap' }}>
          <Button onClick={console.log} size={size} disabled={disabled} variant="invert-outline">
            Konturio
          </Button>
          <Button
            variant="invert-outline"
            onClick={console.log}
            size={size}
            disabled={disabled}
            iconAfter={<EyeBallIcon />}
          >
            Two words
          </Button>
          <Button
            variant="invert-outline"
            onClick={console.log}
            size={size}
            disabled={disabled}
            iconBefore={<EyeBallIcon />}
          >
            Three words here
          </Button>
          <Button
            variant="invert-outline"
            onClick={console.log}
            size={size}
            disabled={disabled}
            iconBefore={<EyeBallIcon />}
          />
        </div>
        <h3>Outline</h3>
        <div style={{ margin: '1em', gap: '1em', display: 'flex', flexFlow: 'row nowrap' }}>
          <Button variant="invert" onClick={console.log} size={size} disabled={disabled}>
            Konturio
          </Button>
          <Button variant="invert" onClick={console.log} size={size} disabled={disabled} iconBefore={<EyeBallIcon />} />
        </div>
        <h3>Dark</h3>
        <div style={{ margin: '1em', gap: '1em', display: 'flex', flexFlow: 'row nowrap' }}>
          <Button variant="invert" dark onClick={console.log} size={size} disabled={disabled}>
            Konturio
          </Button>
          <Button
            variant="invert"
            dark
            onClick={console.log}
            size={size}
            disabled={disabled}
            iconAfter={<EyeBallIcon />}
          >
            Konturio
          </Button>
          <Button
            variant="invert"
            dark
            onClick={console.log}
            size={size}
            disabled={disabled}
            iconBefore={<EyeBallIcon />}
          >
            Konturio
          </Button>
          <Button
            variant="invert"
            dark
            onClick={console.log}
            size={size}
            disabled={disabled}
            iconBefore={<EyeBallIcon />}
          />
        </div>
        <h3>Custom styles</h3>
        <div style={{ margin: '1em' }}>
          <Button
            dark
            variant="invert"
            onClick={console.log}
            size={size}
            disabled={disabled}
            iconBefore={<EyeBallIcon />}
            className={size === 'large' ? s.customButton : ''}
          >
            {`Custom \n styles`}
          </Button>
        </div>
      </div>
    );
  },
};
