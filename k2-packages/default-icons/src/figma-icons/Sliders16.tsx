import { SVGProps, memo } from 'react';

const Sliders16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M14 11.3333L12 11.3333" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M2 4.66667L4 4.66667" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M6.66667 11.3333L2 11.3333" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M9.33333 4.66667H14" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <circle cx={10.6667} cy={11.3333} r={1.33333} stroke="currentColor" strokeLinecap="square" />
    <circle r={1.33333} transform="matrix(-1 0 0 1 5.33334 4.66666)" stroke="currentColor" strokeLinecap="square" />
  </svg>
);

Sliders16.displayName = 'Sliders16';
const Memo = memo(Sliders16);
export default Memo;
