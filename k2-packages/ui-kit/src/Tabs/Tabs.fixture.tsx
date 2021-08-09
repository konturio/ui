import { useValue } from 'react-cosmos/fixture';
import { Tab, Tabs } from '.';

const Content = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>{children}</div>
);

export default () => {
  const [currentTabId, setCurrentTabId] = useValue('currentTab', { defaultValue: 'foo' as string });
  return (
    <Tabs current={currentTabId} onTabChange={setCurrentTabId}>
      <Tab name="Foo tab" id="foo">
        <Content>Content of foo tab</Content>
      </Tab>
      <Tab name="Bar tab" id="bar">
        <Content>Content of bar tab</Content>
      </Tab>
      <Tab name="Baz tab" id="baz">
        <Content>Content of baz tab</Content>
      </Tab>
    </Tabs>
  );
};
