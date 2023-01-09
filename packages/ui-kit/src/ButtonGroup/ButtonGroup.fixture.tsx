import { useValue } from 'react-cosmos/fixture';
import { InfoOutline16 } from '@konturio/default-icons';
import { Button } from '../Button';
import s from './ButtonGroup.fixture.style.module.css';
import { ButtonGroup } from './index';

const classes = {
  btnContainer: s.btnContainer,
  groupContainer: s.groupContainer,
};

export default function Fixture() {
  const [first, setFirst] = useValue('first', { defaultValue: 'button1' as string });
  const [second, setSecond] = useValue('second', { defaultValue: 'button1' as string });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ButtonGroup current={first} onChange={setFirst}>
        <Button size="small" variant="radio" id="button1">
          Car
        </Button>
        <Button size="small" variant="radio" id="button2">
          Car
        </Button>
        <Button size="small" variant="radio" disabled id="button3">
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
          Left
        </Button>
        <Button size="small" variant="radio" id="button2">
          Right
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup
        classes={classes}
        current={second}
        onChange={setSecond}
        renderLabel={
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            No border Prop <InfoOutline16 style={{ color: 'var(--faint-strong)' }} />
          </div>
        }
        borderWrap={false}
      >
        <Button size="small" variant="radio" id="button1">
          Left
        </Button>
        <Button size="small" variant="radio" id="button2">
          Right
        </Button>
      </ButtonGroup>
    </div>
  );
}
