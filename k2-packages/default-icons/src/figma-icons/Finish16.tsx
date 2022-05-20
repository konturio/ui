import { SVGProps, memo } from 'react';

const Finish16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M4 8.22222L6.9697 11.3333L13.3333 4.66666"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

Finish16.displayName = 'Finish16';
const Memo = memo(Finish16);
export default Memo;
