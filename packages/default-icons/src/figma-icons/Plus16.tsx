import { SVGProps, memo } from 'react';

const Plus16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.16667C8.27614 2.16667 8.5 2.39053 8.5 2.66667L8.5 7.5L13.3332 7.5C13.6093 7.5 13.8332 7.72386 13.8332 8C13.8332 8.27614 13.6093 8.5 13.3332 8.5L8.5 8.5L8.5 13.3333C8.5 13.6095 8.27614 13.8333 8 13.8333C7.72386 13.8333 7.5 13.6095 7.5 13.3333L7.5 8.5L2.6665 8.5C2.39036 8.5 2.1665 8.27614 2.1665 8C2.1665 7.72386 2.39036 7.5 2.6665 7.5L7.5 7.5L7.5 2.66667C7.5 2.39053 7.72386 2.16667 8 2.16667Z"
      fill="currentColor"
    />
  </svg>
);

Plus16.displayName = 'Plus16';
const Memo = memo(Plus16);
export default Memo;
