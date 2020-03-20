import React from 'react';
import UI from '@k2-packages/ui-kit';
import T from '../i18n.json';
import { IFireStation } from '../types';
import style from './style.styl';

function FireStation({ fStation }: { fStation: IFireStation }) {
  return (
    <li>
      <input className={style.checkbox} type="checkbox" id={fStation.name} name={fStation.name} />
      <label className={style.label} htmlFor={fStation.name}>
        <hgroup className={style.header}>
          <h3 className={style.title}>{fStation.name}</h3>
          <div className={style.subtitle}>
            {`~ ${fStation.minutes} ${T.min} ${T.or} ${fStation.meters} ${T.meters}`}
          </div>
        </hgroup>
        <table className={style.units}>
          <tbody>
            {
              fStation.units.map(unit => (
                <tr key={unit.type + unit.count}>
                  <td className={style.cell}><b>{unit.type}:</b></td>
                  <td className={style.cell}>{unit.count}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <ul className={style.contacts}>
          {
            fStation.contacts.map(contact => (
              <li key={contact} className={style.contact}>
                <button className={style.contactBtn} type="button">
                  {contact}
                </button>
              </li>
            ))
          }
        </ul>
      </label>
    </li>
  );
}

export default function List({ items }: { items: IFireStation[] }) {
  return (
    <UI.Card title={T['Nearest fire stations']} className={style.fullHeight}>
      <div className={style.delimiter} />
      <ul className={style.rootList}>
        {items.map((fStation, i) => (
          <div key={fStation.id}>
            <FireStation fStation={fStation} />
            {(i === items.length - 1) ? '' : <div className={style.delimiter} />}
          </div>
        ))}
      </ul>
    </UI.Card>
  );
}
