import cn from 'clsx';
import { Card } from '../Card';
import { Modal } from '../Modal';
import { Heading } from '../Heading';
import s from './style.module.css';
import { Controls } from './Controls';
import type { Panel } from './types';

export function Panel({
  className,
  children,
  header,
  headerIcon,
  onHeaderClick,
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
              {headerIcon && <div className={s.headerIconWrap}>{headerIcon}</div>}
              <Heading type="heading-04" margins={false}>
                {header}
              </Heading>
            </div>
            <Controls
              showChevron={!!onHeaderClick}
              customControls={customControls}
              isOpen={isOpen}
              controlClassName={classes?.closeBtn}
            />
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

  if (isOpen && modal?.showInModal) return <Modal onBackdropClick={modal.onModalClick}>{panel}</Modal>;
  return <>{panel}</>;
}
