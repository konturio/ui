import { SVGProps, memo } from 'react';

const Eye16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M0.666668 8C0.666668 8 3.33333 2.66666 8 2.66666C12.6667 2.66666 15.3333 8 15.3333 8C15.3333 8 12.6667 13.3333 8 13.3333C3.33333 13.3333 0.666668 8 0.666668 8Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Eye16.displayName = 'Eye16';
const Memo = memo(Eye16);
export default Memo;
