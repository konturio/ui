import { SVGProps, memo } from 'react';

const FinishFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
      fill="#051626"
    />
    <path
      d="M4 8.22222L6.9697 11.3333L12.5 5.5"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

FinishFilled16.displayName = 'FinishFilled16';
const Memo = memo(FinishFilled16);
export default Memo;
