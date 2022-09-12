import { SVGProps, memo } from 'react';

const PointFilled24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C12.4479 22 20 16.1255 20 9.77761C20 5.48216 16.4183 2 12 2C7.58172 2 4 5.48216 4 9.77761C4 16.1255 11.5521 22 12 22ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
      fill="currentColor"
    />
  </svg>
);

PointFilled24.displayName = 'PointFilled24';
const Memo = memo(PointFilled24);
export default Memo;
