import { SVGProps, memo } from 'react';

const TriangleDown16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M3 5L8 11L13 5" fill="currentColor" />
  </svg>
);

TriangleDown16.displayName = 'TriangleDown16';
const Memo = memo(TriangleDown16);
export default Memo;
