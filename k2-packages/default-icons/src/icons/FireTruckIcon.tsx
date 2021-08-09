import React from 'react';

const FireTruckIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2L2 7H1V8H2V9H1V10C1 10.5523 1.44772 11 2 11C2 12.1046 2.89543 13 4 13C5.10457 13 6 12.1046 6 11H9C9 12.1046 9.89543 13 11 13C12.1046 13 13 12.1046 13 11H14V9C14 8.44771 13.5523 8 13 8V7C13 5.89543 12.1046 5 11 5H8V7H4L8 3L7 2ZM3 8V9H4V8H3ZM5 11C5 11.5523 4.55228 12 4 12C3.44772 12 3 11.5523 3 11C3 10.4477 3.44772 10 4 10C4.55228 10 5 10.4477 5 11ZM11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12ZM10 6H11C11.5523 6 12 6.44772 12 7V8H10V6ZM6 8H5V9H6V8ZM7 8H8V9H7V8Z"
      fill="currentColor"
    />
  </svg>
));

FireTruckIcon.displayName = 'FireTruckIcon';

export default FireTruckIcon;
