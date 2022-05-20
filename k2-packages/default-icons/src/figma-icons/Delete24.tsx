import { SVGProps, memo } from 'react';

const Delete24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4V4Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M18 9L12 15" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M12 9L18 15" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

Delete24.displayName = 'Delete24';
const Memo = memo(Delete24);
export default Memo;
