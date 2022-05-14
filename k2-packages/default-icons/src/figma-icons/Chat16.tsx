import { SVGProps, memo } from 'react';

const Chat16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M2.66666 9.77778C2.66666 10.0921 2.79153 10.3936 3.0138 10.6158C3.23606 10.8381 3.53752 10.963 3.85185 10.963H10.963L13.3333 13.3333V3.85185C13.3333 3.53752 13.2085 3.23606 12.9862 3.0138C12.7639 2.79153 12.4625 2.66667 12.1481 2.66667H3.85185C3.53752 2.66667 3.23606 2.79153 3.0138 3.0138C2.79153 3.23606 2.66666 3.53752 2.66666 3.85185V9.77778Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Chat16.displayName = 'Chat16';
const Memo = memo(Chat16);
export default Memo;
