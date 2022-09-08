import { SVGProps, memo } from 'react';

const PointOutline16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M12.1963 6.76481C12.1963 10.1096 8.32759 13.205 8.09814 13.205C7.8687 13.205 4 10.1096 4 6.76481C4 4.50147 5.8348 2.66667 8.09814 2.66667C10.3615 2.66667 12.1963 4.50147 12.1963 6.76481Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <circle cx={8.09814} cy={6.60251} r={1} fill="currentColor" />
  </svg>
);

PointOutline16.displayName = 'PointOutline16';
const Memo = memo(PointOutline16);
export default Memo;
