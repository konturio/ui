import cn from 'clsx';
import s from './style.module.css';

export interface LanguageSelect {
  languages: Array<string>;
  onClick: (event, lng: string) => void;
  className?: string;
}

export function LanguageSelect({ languages, onClick, className }: LanguageSelect) {
  return (
    <div className={cn(s.languageSelect, className)}>
      {languages.map((lng, i) => (
        <button key={i} onClick={(event) => onClick(event, lng)}>
          {lng}
        </button>
      ))}
    </div>
  );
}
