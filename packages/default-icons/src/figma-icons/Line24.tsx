import { SVGProps, memo } from 'react';

const Line24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1326 6.8674C17.3864 7.12124 17.3864 7.5328 17.1326 7.78664L7.78664 17.1326C7.5328 17.3864 7.12124 17.3864 6.8674 17.1326C6.61356 16.8788 6.61356 16.4672 6.8674 16.2134L16.2134 6.8674C16.4672 6.61356 16.8788 6.61356 17.1326 6.8674Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.3 17.3V18.7H6.7V17.3H5.3ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3 5.3V6.7H18.7V5.3H17.3ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17Z"
      fill="currentColor"
    />
  </svg>
);

Line24.displayName = 'Line24';
const Memo = memo(Line24);
export default Memo;
