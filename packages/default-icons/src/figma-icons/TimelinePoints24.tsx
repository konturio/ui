import { SVGProps, memo } from 'react';

const TimelinePoints24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C12 21 18 14.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 14.3137 12 21 12 21ZM10 8H8V10H10V8ZM16 8H14V10H16V8ZM11 8H13V10H11V8Z"
      fill="currentColor"
    />
  </svg>
);

TimelinePoints24.displayName = 'TimelinePoints24';
const Memo = memo(TimelinePoints24);
export default Memo;
