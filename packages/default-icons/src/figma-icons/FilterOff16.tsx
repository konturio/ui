import { SVGProps, memo } from 'react';

const FilterOff16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M1 11.5L2 11.5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M15 4.5L13 4.5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M10 11.5L15 11.5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M6 4.5H1" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <circle r={2} transform="matrix(-1 0 0 1 5 11.5)" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" />
    <circle cx={11} cy={4.5} r={2} stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" />
  </svg>
);

FilterOff16.displayName = 'FilterOff16';
const Memo = memo(FilterOff16);
export default Memo;
