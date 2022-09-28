import { SVGProps, memo } from 'react';

const History24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3.69758 8.51976C5.05839 5.27731 8.26324 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C8.50253 21 5.47101 19.005 3.98134 16.0909M3.69758 8.51976H7.09091M3.69758 8.51976H3V4.63636M12 7.90909V12L15.2727 15.2727"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
    />
  </svg>
);

History24.displayName = 'History24';
const Memo = memo(History24);
export default Memo;
