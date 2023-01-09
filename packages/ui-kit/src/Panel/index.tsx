import cn from 'clsx';
import { ChevronDown24, ChevronUp24 } from '@konturio/default-icons';
import { nanoid } from 'nanoid';
import { Card } from '../Card';
import { Text } from '../Text';
import { Modal } from '../Modal';
import s from './style.module.css';
import type { MouseEventHandler, ReactElement } from 'react';

export type PanelCustomControl = {
  icon: ReactElement;
  onWrapperClick: MouseEventHandler<HTMLButtonElement>;
};
interface Panel extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  header?: string | ReactElement | ReactElement[];
  headerIcon?: ReactElement;
  isOpen?: boolean;
  onHeaderClick?: React.MouseEventHandler<HTMLDivElement>;
  customCloseBtn?: ReactElement;
  classes?: {
    header?: string;
    headerTitle?: string;
    closeBtn?: string;
    modal?: string;
  };
  modal?: {
    onModalClick: () => void;
    showInModal: boolean;
  };
  contentHeight?: number | string;
  minContentHeight?: number | string;
  maxContentHeight?: number | string;
  contentContainerRef?: (node: HTMLDivElement) => void;
  contentClassName?: string;
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  customControls?: PanelCustomControl[];
}

export function Panel({
  className,
  children,
  header,
  headerIcon,
  onHeaderClick,
  customCloseBtn,
  classes,
  ref,
  isOpen = true,
  modal,
  contentHeight,
  minContentHeight,
  maxContentHeight,
  contentContainerRef,
  contentClassName,
  customControls,
  resize = 'none',
  ...rest
}: React.PropsWithChildren<Panel>) {
  const panel = (
    <Card className={cn(s.card, className)} {...rest}>
      {header && (
        <div className={cn(classes?.header, onHeaderClick && s.hoverable)}>
          <div className={cn(s.headerContent)} onClick={onHeaderClick}>
            <div className={cn(s.headerTitle, classes?.headerTitle)}>
              <div className={s.headerIconWrap}>{headerIcon}</div>
              <Text type="heading-l">{header}</Text>
            </div>
            {/* backwards compatibility */}
            {!customControls && onHeaderClick && (
              <button className={cn(s.close, classes?.closeBtn)}>{isOpen ? <ChevronUp24 /> : <ChevronDown24 />}</button>
            )}

            {customControls?.map((control) => (
              <button className={cn(s.close, classes?.closeBtn)} onClick={control.onWrapperClick} key={nanoid(4)}>
                {control.icon}
              </button>
            ))}
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className={cn(s.contentContainer, contentClassName)}
          ref={contentContainerRef}
          style={{
            resize: resize,
            height: contentHeight || 'unset',
            minHeight: minContentHeight || 'unset',
            maxHeight: maxContentHeight || 'unset',
          }}
        >
          {children}
        </div>
      )}
    </Card>
  );

  if (isOpen && modal?.showInModal)
    return (
      <Modal onModalCloseCallback={modal.onModalClick} className={cn(s.modalCover, classes?.modal)}>
        {panel}
      </Modal>
    );
  return <>{panel}</>;
}

interface PanelIconProps {
  icon: ReactElement;
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
