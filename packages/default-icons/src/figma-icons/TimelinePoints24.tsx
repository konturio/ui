import { SVGProps, memo } from 'react';

const TimelinePoints24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7163 20.1486C14.3081 18.181 18 13.1682 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 13.1682 9.69194 18.181 11.2837 20.1486C11.6579 20.6111 12.3421 20.6111 12.7163 20.1486ZM8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9ZM15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8Z"
      fill="currentColor"
    />
  </svg>
);

TimelinePoints24.displayName = 'TimelinePoints24';
const Memo = memo(TimelinePoints24);
export default Memo;
