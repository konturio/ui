import { SVGProps, memo } from 'react';

const SortDrag16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 5C3.5 4.72386 3.72386 4.5 4 4.5H12C12.2761 4.5 12.5 4.72386 12.5 5C12.5 5.27614 12.2761 5.5 12 5.5H4C3.72386 5.5 3.5 5.27614 3.5 5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 8C3.5 7.72386 3.72386 7.5 4 7.5H12C12.2761 7.5 12.5 7.72386 12.5 8C12.5 8.27614 12.2761 8.5 12 8.5H4C3.72386 8.5 3.5 8.27614 3.5 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 11C3.5 10.7239 3.72386 10.5 4 10.5H12C12.2761 10.5 12.5 10.7239 12.5 11C12.5 11.2761 12.2761 11.5 12 11.5H4C3.72386 11.5 3.5 11.2761 3.5 11Z"
      fill="currentColor"
    />
  </svg>
);

SortDrag16.displayName = 'SortDrag16';
const Memo = memo(SortDrag16);
export default Memo;
