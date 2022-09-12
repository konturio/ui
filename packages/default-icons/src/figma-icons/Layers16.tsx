import { SVGProps, memo } from 'react';

const Layers16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M2.33334 10.6667L8 13.3333L13.6667 10.6667"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path d="M2.33334 8L8 10.6667L13.6667 8" stroke="currentColor" strokeLinecap="square" strokeLinejoin="bevel" />
    <path
      d="M8 2.66667L2.33334 5.33334L8 8L13.6667 5.33334L8 2.66667Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Layers16.displayName = 'Layers16';
const Memo = memo(Layers16);
export default Memo;
