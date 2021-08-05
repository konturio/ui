import { Selector, OptionType } from '.';

const wrapperStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(40px, 1fr))', margin: '3em'};

const options: OptionType[] = [
  {
    label: 'Foo',
    hint: 'This is foo',
    value: 'foo',
  },
  {
    label: 'Bar',
    hint: 'This is bar',
    value: 'bar',
  },
  {
    label: 'Baz',
    hint: 'This is baz',
    value: 'baz',
  },
  {
    label: 'Disabled',
    hint: 'This is disabled',
    value: 'disabled',
    disabled: true,
  },
];
export default (
  <div style={wrapperStyle}>
    <div>
      <h2>Default</h2>
      <Selector onChange={console.log} options={options} selected={'foo'} />
    </div>
    <div>
      <h2>Small</h2>
      <Selector onChange={console.log} small={true} options={options} selected={'foo'} />
    </div>
    <div>
      <h2>Collapse</h2>
      <Selector onChange={console.log} options={options} collapse={true} selected={'foo'} />
    </div>
    <div>
      <h2>Multi</h2>
      <Selector onChange={console.log} options={options} selected={['foo', 'bar']} multi={true} />
    </div>
    <div>
      <h2>Horizontal</h2>
      <Selector onChange={console.log} options={options} selected={'bar'} orientation='horizontal' />
    </div>
  </div>
);
