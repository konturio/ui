import { SVGProps, memo } from 'react';

const LocationFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      opacity={0.8}
      d="M11.1908 4.61739C11.6034 4.42119 12.0367 4.85248 11.8366 5.26326L9.85101 11.3983C9.68152 11.922 8.94284 11.9283 8.7645 11.4075L8.00069 9.56351C7.79457 9.06589 7.39644 8.67243 6.89642 8.4722L5.11633 7.75937C4.56268 7.55678 4.57698 6.76884 5.13762 6.58646L11.1908 4.61739Z"
      fill="currentColor"
    />
  </svg>
);

LocationFilled16.displayName = 'LocationFilled16';
const Memo = memo(LocationFilled16);
export default Memo;
