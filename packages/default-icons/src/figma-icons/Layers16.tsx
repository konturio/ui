import { SVGProps, memo } from 'react';

const Layers16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M2.33334 10.6667L8 13.3333L13.6667 10.6667"
      stroke="#D2D5D8"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path d="M2.33334 8L8 10.6667L13.6667 8" stroke="#D2D5D8" strokeLinecap="square" strokeLinejoin="bevel" />
    <path
      d="M8 2.66666L2.33334 5.33332L8 7.99999L13.6667 5.33332L8 2.66666Z"
      stroke="#D2D5D8"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Layers16.displayName = 'Layers16';
const Memo = memo(Layers16);
export default Memo;
