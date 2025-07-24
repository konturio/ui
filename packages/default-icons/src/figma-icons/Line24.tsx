import { SVGProps, memo } from 'react';
const Line24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H17C16.974 8 16.9483 7.99804 16.9229 7.99609L7.99609 16.9229C7.99804 16.9483 8 16.974 8 17V19C8 19.5523 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V17C4 16.4477 4.44772 16 5 16H7C7.02563 16 7.05103 16.001 7.07617 16.0029L16.0029 7.07617C16.001 7.05103 16 7.02563 16 7V5C16 4.44772 16.4477 4 17 4H19ZM5.2998 18.7002H6.7002V17.2998H5.2998V18.7002ZM17.2998 6.7002H18.7002V5.2998H17.2998V6.7002Z"
      fill="currentColor"
    />
  </svg>
);
Line24.displayName = 'Line24';
const Memo = memo(Line24);
export default Memo;
