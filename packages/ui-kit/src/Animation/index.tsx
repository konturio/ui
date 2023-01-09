import cn from 'clsx';
import s from './style.module.css';

type AnimationVariants = 'fade-in';
type AnimationDirections = 'bottom-top' | 'top-bottom' | 'left-right' | 'right-left';

export function Animation({
  children,
  variant,
  direction,
  className,
}: React.PropsWithChildren<{ variant: AnimationVariants; className?: string; direction?: AnimationDirections }>) {
  return <div className={cn(s['ease-out'], s[variant], direction && s[direction], className)}>{children}</div>;
}
