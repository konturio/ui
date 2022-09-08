import { SVGProps, memo } from 'react';

const Legend16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M7.44504 12.9339H14.2524" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M7.44502 7.95447H14.2524" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M7.44504 3.06088H14.2524" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M2.0534 13.9279L3.65378 11.7159L5.25403 13.9279L2.0534 13.9279Z" stroke="currentColor" />
    <path d="M2.45343 4.19238L2.45343 1.9292L4.71661 1.9292L4.71661 4.19238L2.45343 4.19238Z" stroke="currentColor" />
    <circle cx={3.65368} cy={7.95417} r={1.20026} stroke="currentColor" />
  </svg>
);

Legend16.displayName = 'Legend16';
const Memo = memo(Legend16);
export default Memo;
