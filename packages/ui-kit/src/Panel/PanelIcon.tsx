import cn from 'clsx';
import { Card } from '../Card';
import s from './style.module.css';

interface PanelIconProps {
  icon: React.ReactElement;
  clickHandler?: () => void;
  className?: string;
}

export function PanelIcon({ icon, clickHandler, className }: PanelIconProps) {
  return (
    <Card onClick={clickHandler} className={cn(s.panelIcon, className)}>
      {icon}
    </Card>
  );
}
