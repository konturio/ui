import { SVGProps, memo } from 'react';

const DoubleChevronDown24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.04038 6.04038C6.29422 5.78654 6.70578 5.78654 6.95962 6.04038L11.5 10.5808L16.0404 6.04038C16.2942 5.78654 16.7058 5.78654 16.9596 6.04038C17.2135 6.29422 17.2135 6.70578 16.9596 6.95962L11.9596 11.9596C11.8377 12.0815 11.6724 12.15 11.5 12.15C11.3276 12.15 11.1623 12.0815 11.0404 11.9596L6.04038 6.95962C5.78654 6.70578 5.78654 6.29422 6.04038 6.04038ZM6.04038 12.0404C6.29422 11.7865 6.70578 11.7865 6.95962 12.0404L11.5 16.5808L16.0404 12.0404C16.2942 11.7865 16.7058 11.7865 16.9596 12.0404C17.2135 12.2942 17.2135 12.7058 16.9596 12.9596L11.9596 17.9596C11.7058 18.2135 11.2942 18.2135 11.0404 17.9596L6.04038 12.9596C5.78654 12.7058 5.78654 12.2942 6.04038 12.0404Z"
      fill="currentColor"
    />
  </svg>
);

DoubleChevronDown24.displayName = 'DoubleChevronDown24';
const Memo = memo(DoubleChevronDown24);
export default Memo;