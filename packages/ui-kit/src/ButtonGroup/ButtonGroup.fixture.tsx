import { useValue } from 'react-cosmos/fixture';
import { InfoOutline16 } from '@konturio/default-icons';
import { ButtonGroup } from './index';
import { Button } from '../Button';
import s from './ButtonGroup.fixture.style.module.css';

const classes = {
  btnContainer: s.btnContainer,
  groupContainer: s.groupContainer,
};

console.log(classes);
export default function Fixture() {
  const [first, setFirst] = useValue('first', { defaultValue: 'button1' as string });
  const [second, setSecond] = useValue('second', { defaultValue: 'button1' as string });
  return (
    <>
      <ButtonGroup current={first} onChange={setFirst}>
        <Button size="small" variant="radio" id="button1">
          Car
        </Button>
        <Button size="small" variant="radio" id="button2">
          Car
        </Button>
        <Button size="small" variant="radio" id="button3">
          Car
        </Button>
        <Button size="small" variant="radio" id="button4">
          Car
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup
        classes={classes}
        current={second}
        onChange={setSecond}
        renderLabel={
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Label <InfoOutline16 style={{ color: 'var(--faint-strong)' }} />
          </div>
        }
      >
        <Button size="small" variant="radio" id="button1">
          Right
        </Button>
        <Button size="small" variant="radio" id="button2">
          Left
        </Button>
      </ButtonGroup>
    </>
  );
}
