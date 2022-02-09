import { DropDown } from './index';

export default (
  <DropDown
    options={[
      { label: 'foo', value: 1 },
      { label: 'bar', value: '2' },
    ]}
    onChange={console.log}
  />
);
