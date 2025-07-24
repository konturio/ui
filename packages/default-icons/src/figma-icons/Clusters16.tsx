import { SVGProps, memo } from 'react';
const Clusters16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M4 7H6V9H4V7Z" fill="currentColor" />
    <path d="M7 7H9V9H7V7Z" fill="currentColor" />
    <path d="M10 7H12V9H10V7Z" fill="currentColor" />
  </svg>
);
Clusters16.displayName = 'Clusters16';
const Memo = memo(Clusters16);
export default Memo;
