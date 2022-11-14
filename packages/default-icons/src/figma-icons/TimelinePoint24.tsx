import { SVGProps, memo } from 'react';

const TimelinePoint24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 9C18 14.3137 12 21 12 21C12 21 6 14.3137 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9Z"
      fill="currentColor"
    />
  </svg>
);

TimelinePoint24.displayName = 'TimelinePoint24';
const Memo = memo(TimelinePoint24);
export default Memo;
