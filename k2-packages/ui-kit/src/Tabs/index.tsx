import { Children, isValidElement, ReactNode, useCallback, useMemo } from 'react';
import cn from 'clsx';
import s from './style.module.css';

export interface TabsProps {
  children: JSX.Element[] | JSX.Element;
  current: string;
  onTabChange: (tabId: string) => void;
  classes?: {
    tabBtn?: string;
    tabName?: string;
    tabBody?: string;
    tabContainer?: string;
  };
}

export function Tabs({ children, current: currentTabId, onTabChange: setCurrentTabId, classes }: TabsProps) {
  const tabSelectHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setCurrentTabId(e.target.value),
    [setCurrentTabId],
  );

  const tabs: any[] = useMemo(() => {
    return Children.toArray(children).map((tabChildren) => ({
      ...(isValidElement(tabChildren) ? tabChildren.props : {}),
      element: tabChildren,
    }));
  }, [children]);

  const currentTab = useMemo(() => tabs.find((tab) => tab.id === currentTabId), [tabs, currentTabId]);
  // case we have single tab and don't want to show navigation for it
  const tabHasName: boolean = useMemo(() => {
    if (tabs.length < 2 && tabs[0]?.name !== null) {
      return true;
    }
    return false;
  }, [tabs, currentTabId]);

  return (
    <div className={s.tabsContainer}>
      {tabHasName && (
        <div className={s.navigation}>
          {tabs.map((c) => (
            <div key={c.id} className={classes?.tabContainer}>
              <input
                type="radio"
                value={c.id}
                onChange={tabSelectHandler}
                checked={c.id === currentTabId}
                className={s.input}
                id={c.id}
              />
              <label htmlFor={c.id} className={cn(s.tabBtn, classes?.tabBtn, { [s.current]: c.id === currentTabId })}>
                <span className={cn(s.name, classes?.tabName)}>{c.name}</span>
              </label>
            </div>
          ))}
        </div>
      )}
      <div className={cn(s.body, classes?.tabBody)}>{currentTab ? currentTab.element : null}</div>
    </div>
  );
}

export interface TabProps {
  children: ReactNode;
  id: string;
  name: string | null;
}

export function Tab({ children, id, name }: TabProps) {
  return <div className={s.tab}>{children}</div>;
}
