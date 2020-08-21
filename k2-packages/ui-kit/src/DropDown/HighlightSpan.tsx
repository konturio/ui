import React from 'react';
import s from './style.module.css';

const NEED_ESCAPE = ['[', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];
function escapeSpecialCharacters(dangerString = ''): string {
  let safeString = '';
  for (let i = 0; i < dangerString.length; i++) {
    const char = dangerString.charAt(i);
    if (NEED_ESCAPE.includes(char)) {
      safeString += `\\${char}`;
    } else {
      safeString += char;
    }
  }
  return safeString;
}

interface HighlightSpan {
  highlight?: string;
  children: string;
}

export function HighlightSpan({ highlight, children }: HighlightSpan) {
  const escaped = escapeSpecialCharacters(highlight);
  const between = children.split(new RegExp(escaped, 'gi'));
  return (
    <>
      {between.map((t, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={t + i}>
          {t}
          {i === between.length - 1 ? undefined : <span className={s.highlight}>{highlight}</span>}
        </span>
      ))}
    </>
  );
}
