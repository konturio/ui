import { SVGProps, memo } from 'react';

const Delete16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M14 2.66667H5.33333L0.666667 8L5.33333 13.3333H14C14.3536 13.3333 14.6928 13.1929 14.9428 12.9428C15.1929 12.6928 15.3333 12.3536 15.3333 12V4C15.3333 3.64638 15.1929 3.30724 14.9428 3.05719C14.6928 2.80714 14.3536 2.66667 14 2.66667V2.66667Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 6L8 10" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M8 6L12 10" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

Delete16.displayName = 'Delete16';
const Memo = memo(Delete16);
export default Memo;
