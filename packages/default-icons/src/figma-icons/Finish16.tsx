import { SVGProps, memo } from 'react';

const Finish16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6786 4.30499C13.8783 4.49566 13.8857 4.81216 13.695 5.01191L7.33138 11.6786C7.23703 11.7774 7.10634 11.8333 6.9697 11.8333C6.83306 11.8333 6.70237 11.7774 6.60802 11.6786L3.63832 8.56747C3.44765 8.36772 3.45501 8.05122 3.65476 7.86055C3.85451 7.66988 4.17101 7.67724 4.36168 7.87699L6.9697 10.6092L12.9717 4.32143C13.1623 4.12169 13.4788 4.11433 13.6786 4.30499Z"
      fill="currentColor"
    />
  </svg>
);

Finish16.displayName = 'Finish16';
const Memo = memo(Finish16);
export default Memo;
