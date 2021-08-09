import React from 'react';

const MarkerIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M12 23C12 23 20 15 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 15 12 23 12 23ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
    />
  </svg>
));

MarkerIcon.displayName = 'MarkerIcon';

export default MarkerIcon;
