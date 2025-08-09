import { SVGProps, memo } from 'react';
const TriangleLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M10 3L4 8L10 13" fill="currentColor" />
  </svg>
);
TriangleLeft16.displayName = 'TriangleLeft16';
const Memo = memo(TriangleLeft16);
export default Memo;
