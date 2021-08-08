import { Input } from '.';

const Icon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.64998 6.50001C1.64998 3.82142 3.82139 1.65001 6.49998 1.65001C9.17856 1.65001 11.35 3.82142 11.35 6.50001C11.35 9.17859 9.17856 11.35 6.49998 11.35C3.82139 11.35 1.64998 9.17859 1.64998 6.50001ZM6.49998 0.350006C3.10342 0.350006 0.349976 3.10345 0.349976 6.50001C0.349976 9.89656 3.10342 12.65 6.49998 12.65C7.96411 12.65 9.30875 12.1384 10.3649 11.2841L13.5404 14.4596C13.7942 14.7135 14.2058 14.7135 14.4596 14.4596C14.7134 14.2058 14.7134 13.7942 14.4596 13.5404L11.2841 10.3649C12.1383 9.30878 12.65 7.96414 12.65 6.50001C12.65 3.10345 9.89653 0.350006 6.49998 0.350006Z"
      fill="#0A1622"
    />
  </svg>
);

export default {
  'Base input': (
    <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '1em' }}>
      <Input />
      <Input placeholder="Placeholder" />
      <Input value="Value" onChange={console.log} />
      <Input value="Value" message="With message" onChange={console.log} />
      <Input value="Error" error onChange={console.log} />
      <Input value="Error" message="With error message" error onChange={console.log} />
      <Input value="Focus" isFocused onChange={console.log} />
      <Input value="Focus with error" isFocused error onChange={console.log} />
      <Input placeholder="Disabled with placeholder" disabled />
      <Input value="Disabled with value" disabled onChange={console.log} />
    </div>
  ),
  'With icon': (
    <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '1em' }}>
      <Input>
        <Icon />
      </Input>
      <Input placeholder="Placeholder">
        <Icon />
      </Input>
      <Input value="Value" onChange={console.log}>
        <Icon />
      </Input>
      <Input value="Value" message="With message" onChange={console.log}>
        <Icon />
      </Input>
      <Input value="Error" error onChange={console.log}>
        <Icon />
      </Input>
      <Input value="Error" message="With error message" error onChange={console.log}>
        <Icon />
      </Input>
      <Input value="Focus" isFocused onChange={console.log}>
        <Icon />
      </Input>
      <Input value="Focus with error" isFocused error onChange={console.log}>
        <Icon />
      </Input>
      <Input placeholder="Disabled with placeholder" disabled>
        <Icon />
      </Input>
      <Input value="Disabled with value" disabled onChange={console.log}>
        <Icon />
      </Input>
    </div>
  ),
};
