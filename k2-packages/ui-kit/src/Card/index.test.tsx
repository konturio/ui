import { Card } from './index';
import { render } from 'enzyme';

describe('<Card> component ', () => {
  it('Should render without errors', () => {
    render(<Card />);
  });
});
