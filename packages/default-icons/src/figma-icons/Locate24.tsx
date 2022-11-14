import { SVGProps, memo } from 'react';

const Locate24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={7.35} stroke="currentColor" strokeWidth={1.3} />
    <circle r={2.35} transform="matrix(1 0 0 -1 12 12)" stroke="currentColor" strokeWidth={1.3} />
    <path d="M12 1V5" stroke="currentColor" strokeWidth={1.3} />
    <path d="M23 12L19 12" stroke="currentColor" strokeWidth={1.3} />
    <path d="M12 19L12 23" stroke="currentColor" strokeWidth={1.3} />
    <path d="M5 12H1" stroke="currentColor" strokeWidth={1.3} />
  </svg>
);

Locate24.displayName = 'Locate24';
const Memo = memo(Locate24);
export default Memo;
