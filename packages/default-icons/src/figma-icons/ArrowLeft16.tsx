import { SVGProps, memo } from 'react';

const ArrowLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.66675 4.82365L4.49038 8.00001M4.49038 8.00001L7.66675 11.1764M4.49038 8.00001L11.5096 8.00002"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

ArrowLeft16.displayName = 'ArrowLeft16';
const Memo = memo(ArrowLeft16);
export default Memo;
