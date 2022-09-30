import { Card } from '../Card';
import cn from 'clsx';
import s from './style.module.css';
import type { ReactChild } from 'react';
import { Text } from '../Text';
import { ChevronDown24, ChevronUp24 } from '@konturio/default-icons';
import { Modal } from '../Modal';

interface Panel extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  header?: string | React.ReactChild | React.ReactChild[];
  headerIcon?: React.ReactChild;
  isOpen?: boolean;
  onHeaderClick?: React.MouseEventHandler<HTMLDivElement>;
  customCloseBtn?: ReactChild;
  classes?: {
    header?: string;
    headerTitle?: string;
    closeBtn?: string;
    modal?: string
  };
  modal?: {
    onModalClick: () => void
    showInModal: boolean;
  };
  minContentHeightPx?: number;
  contentContainerRef?: (node: HTMLDivElement) => void;
  contentClassName?: string;
  resize?: 'vertical' | 'horizontal' | 'both' | 'none'
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
  minContentHeightPx,
  contentContainerRef,
  contentClassName,
  resize = 'none',
  ...rest
}: React.PropsWithChildren<Panel>) {

  const panel = <Card className={cn(s.card, className)} {...rest}>
    {header && (
      <div className={cn(onHeaderClick && s.hoverable)}>
        <div className={cn(s.header, classes?.header)} onClick={onHeaderClick}>
          <div className={cn(s.headerTitle, classes?.headerTitle)}>
            {headerIcon}
            <Text type="heading-l">{header}</Text>
          </div>
          {onHeaderClick && (
            <button className={cn(s.close, classes?.closeBtn)}>
              {customCloseBtn ? customCloseBtn
                : isOpen ? <ChevronUp24 /> : <ChevronDown24 />}
            </button>
          )}
        </div>
      </div>
    )}
    {isOpen && <div
      className={cn(s.contentContainer, contentClassName)}
      ref={contentContainerRef}
      style={{ minHeight: minContentHeightPx || 'unset', resize: resize }}
    >
      {children}
    </div>}
  </Card>


  if (isOpen && modal?.showInModal)
    return (
      <Modal
        onModalCloseCallback={modal.onModalClick}
        className={cn(s.modalCover, classes?.modal)}
      >
        {panel}
      </Modal>
    );
  return <>{panel}</>;
}

interface PanelIconProps {
  icon: ReactChild;
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
