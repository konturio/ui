import { DropDown } from '../index';

export default (
  <DropDown
    options={[
      { label: 'Dropdown Item 1', value: 1 },
      { label: 'Dropdown Item 1', value: '2' },
    ]}
    label="label"
    onChange={console.log}
  />
);
