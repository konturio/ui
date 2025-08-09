import { SVGProps, memo } from 'react';
const TriangleUp16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M8 5L13 11H3L8 5Z" fill="currentColor" />
  </svg>
);
TriangleUp16.displayName = 'TriangleUp16';
const Memo = memo(TriangleUp16);
export default Memo;
