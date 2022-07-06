import { DropDownOld } from '../index';

export default (
  <DropDownOld
    options={[
      { label: 'foo', value: 1 },
      { label: 'bar', value: '2' },
    ]}
    onChange={console.log}
  />
);
