import { SVGProps, memo } from 'react';

const Sliders24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 17L18 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M3 7L6 7" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M10 17L3 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M14 7H21" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <circle cx={15.5} cy={17} r={2.5} stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" />
    <circle r={2.5} transform="matrix(-1 0 0 1 8.5 7)" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" />
  </svg>
);

Sliders24.displayName = 'Sliders24';
const Memo = memo(Sliders24);
export default Memo;
