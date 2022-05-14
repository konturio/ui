import { SVGProps, memo } from 'react';

const Chat24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 14.6667C4 15.1382 4.1873 15.5903 4.5207 15.9237C4.8541 16.2571 5.30628 16.4444 5.77778 16.4444H16.4444L20 20V5.77778C20 5.30628 19.8127 4.8541 19.4793 4.5207C19.1459 4.1873 18.6937 4 18.2222 4H5.77778C5.30628 4 4.8541 4.1873 4.5207 4.5207C4.1873 4.8541 4 5.30628 4 5.77778V14.6667Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Chat24.displayName = 'Chat24';
const Memo = memo(Chat24);
export default Memo;
