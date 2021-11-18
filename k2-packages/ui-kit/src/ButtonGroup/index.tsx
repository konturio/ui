import React, {Children, isValidElement, ReactElement, useMemo, useState} from 'react';
import s from './style.module.css';
import {ButtonProps} from '../Button';
import clsx from 'clsx';

export interface ButtonGroupProps {
  current?: string;
  onChange: (buttonId: string) => void;
  children: ReactElement<ButtonProps>[];
  classes?: {
    btnContainer?: string;
    groupContainer?: string;
  };
}

export function ButtonGroup({ current, children, onChange, classes }: ButtonGroupProps) {
  const buttonElements = Children.toArray(children).filter((button) => isValidElement(button));
  const [activeBtn, setActiveBtn] = useState<string | undefined>(undefined);

  const buttons = useMemo(() => {
    return buttonElements.map((button: any) => ({
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
    <div className={clsx(s.groupContainer, classes?.groupContainer)}>
      {buttons.map((button) => (
        <div
          key={button.id}
          className={clsx(classes?.btnContainer, s.button, button.isActive && s.activeBtn)}
          onClick={() => {
            onBtnClick(button.id);
          }}
        >
          {React.cloneElement(button.element, button.props)}
        </div>
      ))}
    </div>
  );
}
