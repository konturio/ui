import React, { Children, isValidElement, ReactElement, useMemo, useState } from 'react';
import s from './style.module.css';
import { ButtonProps } from '../Button';
import clsx from 'clsx';

export interface ButtonGroupProps {
  current?: string;
  onChange: (buttonId: string) => void;
  children: ReactElement<ButtonProps>[];
  classes?: {
    btnContainer?: string;
    groupContainer?: string;
    label?: string;
  };
  renderLabel?: JSX.Element | string;
}

export function ButtonGroup({ current, children, onChange, classes, renderLabel }: ButtonGroupProps) {
  const buttonElements = Children.toArray(children).filter((button) =>
    isValidElement(button),
  ) as ReactElement<ButtonProps>[];
  const [activeBtn, setActiveBtn] = useState<string | undefined>(current);

  const buttons = useMemo(() => {
    return buttonElements.map((button) => ({
      props: button.props,
      element: button,
      isActive: button?.props?.id === activeBtn,
      id: button?.props?.id,
    }));
  }, [buttonElements, activeBtn]);

  const onBtnClick = (btnId: string) => {
    if (activeBtn !== btnId) {
      setActiveBtn(btnId);
      onChange(btnId);
    } else {
      setActiveBtn(undefined);
    }
  };

  return (
    <div className={s.root}>
      {renderLabel && <div className={clsx(s.label, classes?.label)}>{renderLabel}</div>}
      <div className={clsx(s.groupContainer, classes?.groupContainer)}>
        {buttons.map((button) => (
          <div
            key={button.id}
            className={clsx(classes?.btnContainer, s.button, button.isActive && s.activeBtn)}
            onClick={() => {
              if (button.id) {
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
}
