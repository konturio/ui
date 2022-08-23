import { SVGProps, memo } from 'react';

const Filters24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 17L6 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M21 7L18 7" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M14 17L21 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M10 7H3" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <circle
      r={2.5}
      transform="matrix(-1 0 0 1 8.5 17)"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
    />
    <circle cx={15.5} cy={7} r={2.5} stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" />
  </svg>
);

Filters24.displayName = 'Filters24';
const Memo = memo(Filters24);
export default Memo;
