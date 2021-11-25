import { useValue } from 'react-cosmos/fixture';
import { ButtonGroup } from './index';
import { Button } from '../Button';

export default function Fixture() {
  const [currentButton, setCurrentButton] = useValue('currentButton', { defaultValue: 'button1' as string });
  return (
    <ButtonGroup current={currentButton} onChange={setCurrentButton}>
      <Button id="button1">Button 1</Button>
      <Button id="button2">Button 2</Button>
      <Button id="button3">Button 3</Button>
      <Button id="button4">Button 4</Button>
    </ButtonGroup>
  );
}
