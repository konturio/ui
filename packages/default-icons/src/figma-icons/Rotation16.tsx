import { SVGProps, memo } from 'react';
const Rotation16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3C9.79725 3 11.3739 3.94834 12.2553 5.37319H11C10.7239 5.37319 10.5 5.59704 10.5 5.87319C10.5 6.14933 10.7239 6.37319 11 6.37319H13.5C13.7761 6.37319 14 6.14933 14 5.87319V3.5C14 3.22386 13.7761 3 13.5 3C13.2239 3 13 3.22386 13 3.5V4.68239C11.9254 3.06609 10.0876 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C10.3324 14 12.353 12.6691 13.3455 10.7276C13.4712 10.4817 13.3738 10.1805 13.1279 10.0548C12.882 9.92911 12.5808 10.0265 12.4551 10.2724C11.6269 11.8926 9.94232 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3Z"
      fill="currentColor"
    />
  </svg>
);
Rotation16.displayName = 'Rotation16';
const Memo = memo(Rotation16);
export default Memo;
