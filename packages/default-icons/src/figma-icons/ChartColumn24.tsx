import { SVGProps, memo } from 'react';

const ChartColumn24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7 17L7 20" stroke="currentColor" strokeWidth={1.3} />
    <path d="M10 12L10 20" stroke="currentColor" strokeWidth={1.3} />
    <path d="M13 15L13 20" stroke="currentColor" strokeWidth={1.3} />
    <path d="M16 9L16 20" stroke="currentColor" strokeWidth={1.3} />
    <path d="M4 4L4 20L20 20" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
  </svg>
);

ChartColumn24.displayName = 'ChartColumn24';
const Memo = memo(ChartColumn24);
export default Memo;
