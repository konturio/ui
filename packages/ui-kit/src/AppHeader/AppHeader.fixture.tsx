import { AppHeader } from '.';

export default (
  <div style={{ flex: '1' }}>
    <AppHeader title="Test123" onChatClick={console.log} installChat={console.log} />
  </div>
);
