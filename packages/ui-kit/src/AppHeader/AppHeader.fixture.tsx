import { AppHeader } from '.';

export default (
  <div style={{ flex: '1' }}>
    <AppHeader title="TEST!" onChatClick={console.log} installChat={console.log} />
  </div>
);
