import style from './style.module.css';

export function Placeholder({ children }: { children?: React.ReactNode }): JSX.Element | null {
  if (children === null || children === undefined) return null;
  if (typeof children === 'string') {
    if (children.length === 0) return null;
  }
  return <div className={style.placeholder}>{String(children)}</div>;
}
