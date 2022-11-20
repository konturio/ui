import { Card } from '../Card';
import cn from 'clsx';
import s from './style.module.css';
import type { ReactElement } from 'react';
import { Text } from '../Text';
import { ChevronDown24, ChevronUp24, DoubleChevronDown24, DoubleChevronUp24 } from '@konturio/default-icons';
import { Modal } from '../Modal';

export type ShortStateListenersType = {
  onClose: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  onFullStateOpen: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  onShortStateOpen: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
}
interface Panel extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  header?: string | React.ReactElement | React.ReactElement[];
  headerIcon?: ReactElement;
  isOpen?: boolean;
  onHeaderClick?: React.MouseEventHandler<HTMLDivElement>;
  customCloseBtn?: ReactElement;
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
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  /**
   * Optional JSX content of panels short state.
   * Creates short state of the panel.
   * 
   * when used:
   * @param isShortStateOpen - required to show the short state
   * @param shortStateListeners - required to handle clicks on panel icons
   */
  shortStateContent?: ReactElement;
  /**
   * @param isOpen must also be `true` to display short state content
   */
  isShortStateOpen?: boolean;
  /**
   * you can import `ShortStateListenersType` to conveniently describe this propert
   */
  shortStateListeners?: {
    onClose: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
    onFullStateOpen: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
    onShortStateOpen: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  }
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
  shortStateContent,
  isShortStateOpen,
  shortStateListeners,
  ...rest
}: React.PropsWithChildren<Panel>) {

  function panelContent() {
    if (isShortStateOpen && shortStateContent && isOpen) return (
      <div
        className={cn(s.contentContainer, contentClassName)}
        ref={contentContainerRef}
        style={{ minHeight: minContentHeightPx || 'unset', resize: resize }}
      >
        {shortStateContent}
      </div>
    );

    if (isOpen) return (<div
      className={cn(s.contentContainer, contentClassName)}
      ref={contentContainerRef}
      style={{ minHeight: minContentHeightPx || 'unset', resize: resize }}
    >
      {children}
    </div>)

    return null;
  }

  function headerControls() {
    // Simple panel controls
    if (!shortStateContent && !onHeaderClick) return null;
    if (!shortStateContent) return (
      <button className={cn(s.close, classes?.closeBtn)}>
        {customCloseBtn ? customCloseBtn
          : isOpen ? <ChevronUp24 /> : <ChevronDown24 />}
      </button>
    )
    // Short state panel header
    if (isOpen && isShortStateOpen) return <>
      <button
        className={cn(s.close, classes?.closeBtn)}
        onClick={shortStateListeners?.onFullStateOpen}
      >
        <ChevronDown24 />
      </button>

      <button
        className={cn(s.close, classes?.closeBtn)}
        onClick={shortStateListeners?.onClose}
      >
        <ChevronUp24 />
      </button>
    </>
    // Full state panel header
    if (isOpen) return <>
      <button
        className={cn(s.close, classes?.closeBtn)}
        onClick={shortStateListeners?.onShortStateOpen}
      >
        <ChevronUp24 />
      </button>

      <button
        className={cn(s.close, classes?.closeBtn)}
        onClick={shortStateListeners?.onClose}
      >
        <DoubleChevronUp24 />
      </button>
    </>
    // Closed panel header
    return <>
      <button
        className={cn(s.close, classes?.closeBtn)}
        onClick={shortStateListeners?.onFullStateOpen}
      >
        <DoubleChevronDown24 />
      </button>

      <button
        className={cn(s.close, classes?.closeBtn)}
        onClick={shortStateListeners?.onShortStateOpen}
      >
        <ChevronDown24 />
      </button>
    </>
  }

  const panel = <Card className={cn(s.card, className)} {...rest}>
    {header &&
      (<div className={cn(onHeaderClick && s.hoverable)}>
        <div className={cn(s.header, classes?.header)} onClick={onHeaderClick}>
          <div className={cn(s.headerTitle, classes?.headerTitle)}>
            {headerIcon}
            <Text type="heading-l">{header}</Text>
          </div>
          {headerControls()}
        </div>
      </div>)}
    {panelContent()}
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
