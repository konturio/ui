import { SVGProps, memo } from 'react';

const FilterOn16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M1 11.5L2 11.5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M10 11.5L15 11.5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M4 4.5H1" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <circle r={2} transform="matrix(-1 0 0 1 5 11.5)" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" />
    <circle cx={11.5} cy={4.5} r={4.5} fill="currentColor" />
    <path d="M9.5 5L11 6.5L14 3.5" stroke="white" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

FilterOn16.displayName = 'FilterOn16';
const Memo = memo(FilterOn16);
export default Memo;
