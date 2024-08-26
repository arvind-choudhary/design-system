import type { Meta, StoryObj } from '@storybook/react';
import { TabsData } from '../_tab/Tabs.mock'
import { RenderList, type IRenderListProps } from "../../reusable/DisplayList/DisplayListOfItems";

import { Tab } from './Tab';
import { TabsContextProvider, TabsContext } from '../../molecules/Tabs/TabsContext';
import { useContext } from 'react';


interface TabListProps {
  title: string;
  index: number;
}

interface Props extends IRenderListProps<TabListProps> {};

const TabList = ({ listOfData, callback }: Props) => {
    return (
      <TabsContextProvider>
        <RenderList listOfData={listOfData} callback={callback} />
      </TabsContextProvider>
    );
}


const meta = {
  component: TabList,
  args: {
    listOfData: TabsData,
    callback(props) {
      const { title, index } = props;
      const { activeTabIndex, setActiveTabIndex } = useContext(TabsContext);
      return (<Tab currentTabIndex={index} activeTabIndex={activeTabIndex} onClick={() => setActiveTabIndex(index)}>{title}</Tab>)
    },
  }
} satisfies Meta<typeof TabList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListOfTabs: Story = {
  args: {
    
  }
};
