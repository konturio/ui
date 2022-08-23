import { SVGProps, memo } from 'react';

const Map24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 20.25L3 18V3.75L9 6M9 20.25V6M9 20.25L15 18M9 6L15 3.75M15 3.75V18M15 3.75L21 6V20.25L15 18"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Map24.displayName = 'Map24';
const Memo = memo(Map24);
export default Memo;
