import React, { Children, isValidElement, memo, useMemo, useState } from 'react';
import clsx from 'clsx';
import s from './style.module.css';
import type { ReactElement } from 'react';
import type { ButtonProps } from '../Button';

export interface ButtonGroupProps {
  current?: string;
  onChange?: (buttonId: string) => void;
  children: Array<ReactElement<ButtonProps> | boolean | null | undefined>;
  classes?: {
    btnContainer?: string;
    groupContainer?: string;
    label?: string;
  };
  renderLabel?: JSX.Element | string;
  borderWrap?: boolean;
}

export const ButtonGroup = memo(
  ({ current, children, onChange, classes, renderLabel, borderWrap = true }: ButtonGroupProps) => {
    const buttonElements = Children.toArray(children).filter((button) =>
      isValidElement(button),
    ) as ReactElement<ButtonProps>[];
    const [activeBtn, setActiveBtn] = useState<string | undefined>(current);

    const buttons = useMemo(() => {
      return buttonElements.map((button) => ({
        props: button.props,
        element: button,
        isActive: button?.props?.id ? button.props.id === activeBtn : false,
        id: button?.props?.id,
      }));
    }, [buttonElements, activeBtn]);

    const onBtnClick = (btnId: string) => {
      if (activeBtn !== btnId) {
        setActiveBtn(btnId);
        if (onChange) onChange(btnId);
      } else {
        setActiveBtn(undefined);
      }
    };

    return (
      <div className={s.root}>
        {renderLabel && <div className={clsx(s.label, classes?.label)}>{renderLabel}</div>}
        <div className={clsx(s.groupContainer, borderWrap && s.defaultBorderWrap, classes?.groupContainer)}>
          {buttons.map((button, index) => (
            <div
              key={button?.id || index.toString()}
              className={clsx(classes?.btnContainer, s.button, button.isActive && s.activeBtn)}
              onClick={() => {
                if (button?.id && !button.props?.disabled) {
                  onBtnClick(button.id);
                }
              }}
            >
              {React.cloneElement(button.element, { ...button.props, active: button.isActive })}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
