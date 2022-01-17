import { memo } from 'react';

const EyeBallIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.666687 7.99984C0.666687 7.99984 3.33335 2.6665 8.00002 2.6665C12.6667 2.6665 15.3334 7.99984 15.3334 7.99984C15.3334 7.99984 12.6667 13.3332 8.00002 13.3332C3.33335 13.3332 0.666687 7.99984 0.666687 7.99984Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

EyeBallIcon.displayName = 'EyeBallIcon';

export default EyeBallIcon;
