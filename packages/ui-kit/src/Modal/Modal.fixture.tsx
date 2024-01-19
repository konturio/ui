import { useLayoutEffect, useRef } from 'react';
import { Modal } from '.';

const content = <div style={{ backgroundColor: 'white', padding: '3em' }}>Hello world</div>;

export default {
  Default: <Modal>{content}</Modal>,
  'Custom container': () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<HTMLDialogElement | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      const customEl = document.createElement('dialog');
      customEl.open = true;
      document.body.appendChild(customEl);
      ref.current = customEl;
      return () => {
        document.body.removeChild(customEl);
      };
    }, []);
    return <Modal modalContainer={ref.current!}>{content}</Modal>;
  },
  'Backdrop listener': <Modal onCancel={(reason) => alert(`Closed\nReason: ${reason}`)}>{content}</Modal>,
  'Custom z-index': <Modal zIndex="10">{content}</Modal>,
};
