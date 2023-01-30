import { SVGProps, memo } from 'react';

const TimelinePoint24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 9C18 13.1682 14.3081 18.181 12.7163 20.1486C12.3421 20.6111 11.6579 20.6111 11.2837 20.1486C9.69194 18.181 6 13.1682 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9Z"
      fill="currentColor"
    />
  </svg>
);

TimelinePoint24.displayName = 'TimelinePoint24';
const Memo = memo(TimelinePoint24);
export default Memo;
