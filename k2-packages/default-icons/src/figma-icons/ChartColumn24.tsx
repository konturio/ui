import { SVGProps, memo } from 'react';

const ChartColumn24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7 17L7 20" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    <path d="M11 12L11 20" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    <path d="M15 15L15 20" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    <path d="M19 9L19 20" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    <path d="M4 4L4 20L20 20" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

ChartColumn24.displayName = 'ChartColumn24';
const Memo = memo(ChartColumn24);
export default Memo;
