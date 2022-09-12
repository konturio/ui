import { SVGProps, memo } from 'react';

const CornerUpLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M6 10.3333L2.66666 7L6 3.66667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 12.3333V9.66667C13.3333 8.95942 13.0524 8.28115 12.5523 7.78105C12.0522 7.28095 11.3739 7 10.6667 7H2.66666"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
  </svg>
);

CornerUpLeft16.displayName = 'CornerUpLeft16';
const Memo = memo(CornerUpLeft16);
export default Memo;
