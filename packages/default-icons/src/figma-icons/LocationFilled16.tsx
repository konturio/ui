import { SVGProps, memo } from 'react';

const LocationFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M11.1908 4.61738C11.6034 4.42119 12.0367 4.85247 11.8366 5.26325L9.85101 11.3983C9.68152 11.922 8.94284 11.9283 8.7645 11.4075L8.00068 9.5635C7.79456 9.06588 7.39644 8.67243 6.89642 8.4722L5.11633 7.75937C4.56268 7.55677 4.57698 6.76883 5.13762 6.58646L11.1908 4.61738Z"
      fill="currentColor"
    />
  </svg>
);

LocationFilled16.displayName = 'LocationFilled16';
const Memo = memo(LocationFilled16);
export default Memo;
