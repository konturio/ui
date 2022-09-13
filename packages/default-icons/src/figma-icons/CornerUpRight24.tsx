import { SVGProps, memo } from 'react';

const CornerUpRight24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M15 14L20 9L15 4" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
    <path
      d="M4 20V13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H20"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
  </svg>
);

CornerUpRight24.displayName = 'CornerUpRight24';
const Memo = memo(CornerUpRight24);
export default Memo;
