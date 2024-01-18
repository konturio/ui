import cn from 'clsx';
import { ChevronDown24, ChevronUp24 } from '@konturio/default-icons';
import { nanoid } from 'nanoid';
import s from './style.module.css';
import type { PanelCustomControl } from './types';

export function Controls({
  customControls,
  showChevron,
  controlClassName,
  isOpen,
}: {
  isOpen: boolean;
  showChevron: boolean;
  customControls?: Array<PanelCustomControl>;
  controlClassName?: string;
}) {
  if (customControls) {
    return (
      <div className={cn(s.controls)}>
        {customControls?.map((control) => (
          <button
            disabled={control.disabled}
            className={cn(s.close, controlClassName, control.className)}
            onClick={control.onWrapperClick}
            key={nanoid(4)}
          >
            {control.icon}
          </button>
        ))}
      </div>
    );
  }

  if (showChevron) {
    return (
      <div className={cn(s.controls)}>
        <button className={cn(s.close, controlClassName)}>{isOpen ? <ChevronUp24 /> : <ChevronDown24 />}</button>
      </div>
    );
  }

  return null;
}
