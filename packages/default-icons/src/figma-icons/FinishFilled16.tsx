import { SVGProps, memo } from 'react';

const FinishFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <rect width={16} height={16} rx={8} fill="currentColor" />
    <path
      d="M4 8.22222L6.9697 11.3333L12.5 5.5"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

FinishFilled16.displayName = 'FinishFilled16';
const Memo = memo(FinishFilled16);
export default Memo;
