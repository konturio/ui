import { EyeBallIcon } from '@konturio/default-icons';
import { useValue } from 'react-cosmos/fixture';
import s from './fixture-style.module.css';
import { Button } from '.';

const onClick = (e) => {
  // alert(e);
};
export default {
  ['regular']: () => {
    const [disabled] = useValue('disabled', {
      defaultValue: false,
    });

    const [dark] = useValue('dark', {
      defaultValue: false,
    });

    const [active] = useValue('active', {
      defaultValue: false,
    });

    const sizes = ['tiny', 'small', 'medium', 'large'] as const;
    const variants = ['primary', 'invert-outline', 'invert'] as const;

    return (
      <div>
        {variants.map((variant) => (
          <div key={variant}>
            <h2>variant={`"${variant}"`}</h2>
            {sizes.map((size) => (
              <div key={size}>
                <h4>size={`"${size}"`}</h4>
                <div className={s.section}>
                  <Button
                    variant={variant}
                    dark={dark}
                    active={active}
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                  >
                    Konturio button
                  </Button>
                  <Button
                    variant={variant}
                    dark={dark}
                    active={active}
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                    iconBefore={<EyeBallIcon />}
                  >
                    Left icon
                  </Button>
                  <Button
                    variant={variant}
                    dark={dark}
                    active={active}
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                    iconAfter={<EyeBallIcon />}
                  >
                    Right icon
                  </Button>
                  <Button
                    variant={variant}
                    dark={dark}
                    active={active}
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                    iconBefore={<EyeBallIcon />}
                  />
                  <Button
                    variant={variant}
                    dark={dark}
                    active
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                    iconBefore={<EyeBallIcon />}
                  >
                    active state
                  </Button>
                  <Button
                    variant={variant}
                    dark={dark}
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                    iconBefore={<EyeBallIcon />}
                    className={s.customButton}
                  >
                    with custom style
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
