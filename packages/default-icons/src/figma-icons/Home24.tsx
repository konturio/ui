import { SVGProps, memo } from 'react';
const Home24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.3064 12.5503H17.8504V20.0503H13.6502V15.6723C13.6502 15.3078 13.3545 15.0122 12.99 15.0122H11.0105C10.646 15.0122 10.3504 15.3078 10.3504 15.6723V20.0503H6.15019V12.5503H2.69414L11.9998 4.17427L21.3064 12.5503Z"
      stroke="currentColor"
      strokeWidth={1.3}
    />
  </svg>
);
Home24.displayName = 'Home24';
const Memo = memo(Home24);
export default Memo;
