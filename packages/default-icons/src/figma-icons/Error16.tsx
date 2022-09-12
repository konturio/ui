import { SVGProps, memo } from 'react';

const Error16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.55556 0 0 3.55556 0 8C0 12.4444 3.55556 16 8 16C12.4444 16 16 12.4444 16 8C16 3.55556 12.4444 0 8 0Z"
      fill="currentColor"
    />
    <path d="M13 7.2L3 7.2L3 8.8L13 8.8V7.2Z" fill="white" />
  </svg>
);

Error16.displayName = 'Error16';
const Memo = memo(Error16);
export default Memo;
