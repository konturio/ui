import React from 'react';
import { SearchIcon, CallIcon, CloseIcon, FlameIcon, FireTruckIcon, HydrantIcon } from '@k2-packages/default-icons';
import { icons } from '@k2-packages/map-draw-tools';
import s from './style.styl';

export default function Icons(): JSX.Element {
  return (
    <>
      <div className={s.grid}>
        <SearchIcon className="hello" />
        <CallIcon />
        <CloseIcon />
        <FlameIcon />
        <FireTruckIcon />
        <HydrantIcon />
      </div>
      <div className={s.grid}>
        {Object.entries(icons).map(([name, comp]) => {
          const Component = comp;
          return (
            <div key={name} className={s.cell}>
              <span style={{ padding: '4px' }}>
                <Component />
              </span>
              <span style={{ color: 'white', backgroundColor: 'black', padding: '4px' }}>
                <Component />
              </span>
              <h4> - {name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
