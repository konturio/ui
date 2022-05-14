import { SVGProps, memo } from 'react';

const Prefs16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.4848 9.81818C12.4042 10.001 12.3801 10.2038 12.4158 10.4004C12.4514 10.597 12.5451 10.7784 12.6848 10.9212L12.7212 10.9576C12.8339 11.0701 12.9233 11.2038 12.9843 11.351C13.0453 11.4981 13.0767 11.6559 13.0767 11.8152C13.0767 11.9744 13.0453 12.1322 12.9843 12.2793C12.9233 12.4265 12.8339 12.5602 12.7212 12.6727C12.6086 12.7854 12.475 12.8748 12.3278 12.9358C12.1807 12.9968 12.0229 13.0282 11.8636 13.0282C11.7043 13.0282 11.5466 12.9968 11.3995 12.9358C11.2523 12.8748 11.1186 12.7854 11.0061 12.6727L10.9697 12.6364C10.8269 12.4966 10.6454 12.4029 10.4488 12.3673C10.2522 12.3316 10.0495 12.3557 9.86667 12.4364C9.68741 12.5132 9.53454 12.6408 9.42685 12.8034C9.31917 12.966 9.26138 13.1565 9.26061 13.3515V13.4545C9.26061 13.776 9.1329 14.0843 8.90558 14.3116C8.67827 14.539 8.36996 14.6667 8.04849 14.6667C7.72701 14.6667 7.4187 14.539 7.19139 14.3116C6.96407 14.0843 6.83636 13.776 6.83636 13.4545V13.4C6.83167 13.1994 6.76674 13.0048 6.65001 12.8416C6.53328 12.6784 6.37014 12.5541 6.18182 12.4848C5.99902 12.4042 5.79625 12.3801 5.59964 12.4158C5.40304 12.4514 5.22162 12.5451 5.07879 12.6848L5.04242 12.7212C4.92985 12.8339 4.79617 12.9233 4.64902 12.9843C4.50187 13.0453 4.34414 13.0767 4.18485 13.0767C4.02556 13.0767 3.86783 13.0453 3.72068 12.9843C3.57353 12.9233 3.43985 12.8339 3.32727 12.7212C3.21457 12.6086 3.12517 12.475 3.06417 12.3278C3.00317 12.1807 2.97177 12.0229 2.97177 11.8636C2.97177 11.7043 3.00317 11.5466 3.06417 11.3995C3.12517 11.2523 3.21457 11.1186 3.32727 11.0061L3.36364 10.9697C3.50336 10.8269 3.59708 10.6454 3.63273 10.4488C3.66838 10.2522 3.64431 10.0495 3.56364 9.86667C3.48681 9.68741 3.35925 9.53454 3.19665 9.42685C3.03405 9.31917 2.84351 9.26138 2.64849 9.26061H2.54546C2.22398 9.26061 1.91567 9.1329 1.68836 8.90558C1.46104 8.67827 1.33333 8.36996 1.33333 8.04849C1.33333 7.72701 1.46104 7.4187 1.68836 7.19139C1.91567 6.96407 2.22398 6.83636 2.54546 6.83636H2.6C2.8006 6.83167 2.99516 6.76674 3.15836 6.65001C3.32157 6.53328 3.44589 6.37014 3.51515 6.18182C3.59583 5.99902 3.61989 5.79625 3.58425 5.59964C3.5486 5.40304 3.45487 5.22162 3.31515 5.07879L3.27879 5.04242C3.16609 4.92985 3.07669 4.79617 3.01569 4.64902C2.95469 4.50187 2.92329 4.34414 2.92329 4.18485C2.92329 4.02556 2.95469 3.86783 3.01569 3.72068C3.07669 3.57353 3.16609 3.43985 3.27879 3.32727C3.39136 3.21457 3.52505 3.12517 3.67219 3.06417C3.81934 3.00317 3.97707 2.97177 4.13636 2.97177C4.29566 2.97177 4.45339 3.00317 4.60053 3.06417C4.74768 3.12517 4.88137 3.21457 4.99394 3.32727L5.0303 3.36364C5.17314 3.50336 5.35456 3.59708 5.55116 3.63273C5.74776 3.66838 5.95054 3.64431 6.13333 3.56364H6.18182C6.36107 3.48681 6.51395 3.35925 6.62163 3.19665C6.72931 3.03405 6.7871 2.84351 6.78788 2.64849V2.54546C6.78788 2.22398 6.91559 1.91567 7.1429 1.68836C7.37022 1.46104 7.67853 1.33333 8 1.33333C8.32148 1.33333 8.62978 1.46104 8.8571 1.68836C9.08442 1.91567 9.21212 2.22398 9.21212 2.54546V2.6C9.2129 2.79502 9.27069 2.98556 9.37837 3.14816C9.48605 3.31076 9.63893 3.43833 9.81818 3.51515C10.001 3.59583 10.2038 3.61989 10.4004 3.58425C10.597 3.5486 10.7784 3.45487 10.9212 3.31515L10.9576 3.27879C11.0701 3.16609 11.2038 3.07669 11.351 3.01569C11.4981 2.95469 11.6559 2.92329 11.8152 2.92329C11.9744 2.92329 12.1322 2.95469 12.2793 3.01569C12.4265 3.07669 12.5602 3.16609 12.6727 3.27879C12.7854 3.39136 12.8748 3.52505 12.9358 3.67219C12.9968 3.81934 13.0282 3.97707 13.0282 4.13636C13.0282 4.29566 12.9968 4.45339 12.9358 4.60053C12.8748 4.74768 12.7854 4.88137 12.6727 4.99394L12.6364 5.0303C12.4966 5.17314 12.4029 5.35456 12.3673 5.55116C12.3316 5.74776 12.3557 5.95054 12.4364 6.13333V6.18182C12.5132 6.36107 12.6408 6.51395 12.8034 6.62163C12.966 6.72931 13.1565 6.7871 13.3515 6.78788H13.4545C13.776 6.78788 14.0843 6.91559 14.3116 7.1429C14.539 7.37022 14.6667 7.67853 14.6667 8C14.6667 8.32148 14.539 8.62978 14.3116 8.8571C14.0843 9.08442 13.776 9.21212 13.4545 9.21212H13.4C13.205 9.2129 13.0144 9.27069 12.8518 9.37837C12.6892 9.48605 12.5617 9.63893 12.4848 9.81818V9.81818Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Prefs16.displayName = 'Prefs16';
const Memo = memo(Prefs16);
export default Memo;
