import { SVGProps, memo } from 'react';

const List24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M8 18H21" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M3 18H3.01" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M8 12H21" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M3 12H3.01" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M8 6H21" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M3 6H3.01" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

List24.displayName = 'List24';
const Memo = memo(List24);
export default Memo;
