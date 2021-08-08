import { Children, useMemo, isValidElement, useCallback } from 'react';
import cn from 'clsx';
import s from './style.module.css';

export function Tabs({
  children,
  current: currentTabId,
  onTabChange: setCurrentTabId,
}: {
  children: JSX.Element[];
  current: string;
  onTabChange: (tabId: string) => void;
}) {
  const tabSelectHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setCurrentTabId(e.target.value),
    [setCurrentTabId],
  );

  const tabs = useMemo(() => {
    return Children.toArray(children).map((tabChildren) => ({
      ...(isValidElement(tabChildren) ? tabChildren.props : {}),
      element: tabChildren,
    }));
  }, [children]);

  const currentTab = useMemo(
    () => tabs.find((tab) => tab.id === currentTabId),
    [tabs, currentTabId],
  );

  return (
    <div className={s.tabsContainer}>
      <div className={s.navigation}>
        {tabs.map((c) => (
          <>
            <input
              type="radio"
              value={c.id}
              onChange={tabSelectHandler}
              checked={c.id === currentTabId}
              className={s.input}
              id={c.id}
            />
            <label htmlFor={c.id} className={cn(s.tabBtn, { [s.current]: c.id === currentTabId })}>
              <span className={s.name}>{c.name}</span>
            </label>
          </>
        ))}
      </div>
      <div className={s.body}>{currentTab ? currentTab.element : null}</div>
    </div>
  );
}

export function Tab({ children, id, name }: React.PropsWithChildren<{ id: string; name: string }>) {
  return <div className={s.tab}>{children}</div>;
}
