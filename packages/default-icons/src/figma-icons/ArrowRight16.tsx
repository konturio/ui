import { SVGProps, memo } from 'react';

const ArrowRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8.33311 4.82365L11.5095 8.00001M11.5095 8.00001L8.33311 11.1764M11.5095 8.00001L4.49023 8.00002"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

ArrowRight16.displayName = 'ArrowRight16';
const Memo = memo(ArrowRight16);
export default Memo;
