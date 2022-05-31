import { SVGProps, memo } from 'react';

const Chart24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7 12.5V17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    <path d="M12 7L12 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    <path d="M17 11L17 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    <rect x={2.35} y={2.35} width={19.3} height={19.3} rx={2.65} stroke="currentColor" strokeWidth={1.3} />
  </svg>
);

Chart24.displayName = 'Chart24';
const Memo = memo(Chart24);
export default Memo;
