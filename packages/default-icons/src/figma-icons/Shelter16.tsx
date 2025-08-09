import { SVGProps, memo } from 'react';
const Shelter16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M14 3L2 7V9L3 8.66667V14H13V12H5V8L14 5V3Z" fill="black" />
  </svg>
);
Shelter16.displayName = 'Shelter16';
const Memo = memo(Shelter16);
export default Memo;
