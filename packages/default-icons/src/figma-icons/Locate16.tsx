import { SVGProps, memo } from 'react';

const Locate16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <circle cx={8} cy={8} r={4.5} stroke="currentColor" />
    <circle r={1.5} transform="matrix(1 0 0 -1 8 8)" fill="currentColor" stroke="currentColor" />
    <path d="M8 1V4" stroke="currentColor" />
    <path d="M15 8H12" stroke="currentColor" />
    <path d="M8 12V15" stroke="currentColor" />
    <path d="M4 8H1" stroke="currentColor" />
  </svg>
);

Locate16.displayName = 'Locate16';
const Memo = memo(Locate16);
export default Memo;
