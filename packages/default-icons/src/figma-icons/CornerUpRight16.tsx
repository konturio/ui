import { SVGProps, memo } from 'react';

const CornerUpRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M10 10.3333L13.3333 7L10 3.66667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M2.66666 12.3333V9.66667C2.66666 8.95942 2.94762 8.28115 3.44771 7.78105C3.94781 7.28095 4.62609 7 5.33333 7H13.3333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
  </svg>
);

CornerUpRight16.displayName = 'CornerUpRight16';
const Memo = memo(CornerUpRight16);
export default Memo;
