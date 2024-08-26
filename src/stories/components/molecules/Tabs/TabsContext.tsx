import { createContext, useState } from 'react';

interface TabsContextProps {
    activeTabIndex: number;
    setActiveTabIndex: (tabIndex: number) => void;
}

export const TabsContext = createContext<TabsContextProps>({
    activeTabIndex: 0,
    setActiveTabIndex: () => {}
});

export const TabsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <TabsContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
      {children}
    </TabsContext.Provider>
  );
};