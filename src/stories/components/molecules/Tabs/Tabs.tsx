import { useContext } from "react";
import { IRenderListProps, RenderList } from "../../reusable/DisplayList/DisplayListOfItems";
import { TabsContext, TabsContextProvider } from "./TabsContext";
import { Tab } from "../../atom/_tab/Tab";


interface TabListProps {
    title: string;
    index: number;
  }
  
  interface Props extends IRenderListProps<TabListProps> {};

  export const TabComponent = ({ title, index }: TabListProps): JSX.Element => {
    const { activeTabIndex, setActiveTabIndex } = useContext(TabsContext);

    return (
      <Tab
        currentTabIndex={index}
        activeTabIndex={activeTabIndex}
        onClick={() => setActiveTabIndex(index)}
      >
        {title}
      </Tab>
    );
  };
  
  export const TabList = ({ listOfData, callback }: Props) => {
      return (
        <TabsContextProvider>
          <RenderList listOfData={listOfData} callback={callback} />
        </TabsContextProvider>
      );
  }
  