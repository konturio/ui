import { LineItem } from '.';

export default {
  LineItem: (
    <div style={{ whiteSpace: 'pre-line' }}>
      <p>{`This item common for checkbox and radio inputs components.
      Also useful for static lists`}</p>
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <LineItem label="withoutId" />
        <LineItem id="withId" label="withId" />
        <LineItem label="<- withChildren">
          <div style={{ paddingRight: '4px' }}>(Some icon)</div>
        </LineItem>
      </div>
    </div>
  ),
};
