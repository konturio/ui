import { SVGProps, memo } from 'react';
const TriangleRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M6 13L12 8L6 3" fill="currentColor" />
  </svg>
);
TriangleRight16.displayName = 'TriangleRight16';
const Memo = memo(TriangleRight16);
export default Memo;
