import React from 'react';
import style from './style.styl';
import clsx from 'clsx';

export interface LanguageSelect {
  languages: Array<string>;
  onClick: (event, lng: string) => void;
  className?: string;
}

export default function LanguageSelect({ languages, onClick, className }: LanguageSelect) {
  return (
    <div className={clsx(style.languageSelect, className)}>
      {languages.map((lng, i) => (
        <button key={i} onClick={(event) => onClick(event, lng)}>
          {lng}
        </button>
      ))}
    </div>
  );
}
