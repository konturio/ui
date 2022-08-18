import { TabList } from '../components/TabList';
import { TabPanel, TabPanels } from '../components/TabPanel';
import { Tab } from '../components/Tab';
import { Tabs } from '../index';
import { useValue } from 'react-cosmos/fixture';

export default {
  Classic: (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
  Vertical: (
    <Tabs orientation="vertical">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>one!</TabPanel>
        <TabPanel>two!</TabPanel>
        <TabPanel>three!</TabPanel>
      </TabPanels>
    </Tabs>
  ),
  WithDisabled: (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab disabled>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
  WithDefaultIndex: (
    <Tabs defaultIndex={1}>
      <TabPanels>
        <TabPanel>Selection content 1</TabPanel>
        <TabPanel>Selection content 2</TabPanel>
        <TabPanel>Selection content 3</TabPanel>
      </TabPanels>
      <TabList>
        <Tab>Sel 1</Tab>
        <Tab>Sel 2</Tab>
        <Tab>Sel 3</Tab>
      </TabList>
    </Tabs>
  ),
  WithOnChange: () => {
    const colors = ['firebrick', 'goldenrod', 'dodgerblue'];
    const [tabIndex, setTabIndex] = useValue('tabIndex', { defaultValue: 0 as number });
    const backgroundColor = colors[tabIndex];

    return (
      <Tabs onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>First Tab</Tab>
          <Tab>Second Tab</Tab>
          <Tab>Third Tab</Tab>
        </TabList>

        <TabPanels
          style={{
            color: 'white',
            background: backgroundColor,
          }}
        >
          <TabPanel>
            <p>First Tab Content</p>
          </TabPanel>
          <TabPanel>
            <p>Second Tab Content</p>
          </TabPanel>
          <TabPanel>
            <p>Third Tab Content</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  },
};
