import { AppHeader } from '.';

export default (
  <div style={{ flex: '1' }}>
    <AppHeader title="Example" onChatClick={console.log} installChat={console.log} />
  </div>
);
