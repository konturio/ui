import { memo } from 'react';

const DisasterListIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="17" height="22" viewBox="0 0 17 22" fill="none" {...props}>
    <path
      d="M1 14.3333C1 17 3.92847 19.5714 5.39271 20.5238C5.23002 20.2063 4.90463 19.2857 4.90463 18.1429C4.90463 17 5.88079 15.7619 6.36887 15.2857C6.36887 15.7619 6.36887 16.7143 6.85695 18.1429C7.34503 19.5714 9.29734 20.5238 10.2735 21C11.575 20.3651 14.2341 18.9134 15.6424 14.3333C16.8138 10.5238 14.8289 7.66667 13.6901 6.71429C13.6901 7.03175 13.4948 7.95238 12.7139 9.09524C11.933 10.2381 10.1108 10.8413 9.29734 11C9.94811 10.2063 11.152 8.04762 10.7616 5.7619C10.3711 3.47619 7.67041 1.63492 6.36887 1C6.85695 2.11111 7.34503 4.90476 5.39271 7.19048C2.95232 10.0476 1 11 1 14.3333Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

DisasterListIcon.displayName = 'DisasterListIcon';

export default DisasterListIcon;
