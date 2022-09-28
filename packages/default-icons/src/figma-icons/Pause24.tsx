import { SVGProps, memo } from 'react';

const Pause24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 7C7 6.44772 7.44772 6 8 6H9C9.55228 6 10 6.44772 10 7V17C10 17.5523 9.55228 18 9 18H8C7.44772 18 7 17.5523 7 17V7Z"
      stroke="currentColor"
      strokeWidth={1.3}
    />
    <path
      d="M14 7C14 6.44772 14.4477 6 15 6H16C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18H15C14.4477 18 14 17.5523 14 17V7Z"
      stroke="currentColor"
      strokeWidth={1.3}
    />
  </svg>
);

Pause24.displayName = 'Pause24';
const Memo = memo(Pause24);
export default Memo;
