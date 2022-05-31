import { SVGProps, memo } from 'react';

const Calendar24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 10H21" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2V6" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M8 2V6" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

Calendar24.displayName = 'Calendar24';
const Memo = memo(Calendar24);
export default Memo;
